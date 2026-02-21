export type YouTubePlaylistVideo = {
  videoId: string;
  title: string;
  publishedAt: string;
  thumbnailUrl: string;
  url: string;
};

type YouTubePlaylistItemsResponse = {
  items?: Array<{
    snippet?: {
      title?: string;
      publishedAt?: string;
      thumbnails?: {
        medium?: { url?: string };
        high?: { url?: string };
        default?: { url?: string };
      };
      resourceId?: { videoId?: string };
    };
  }>;
};

export async function getPlaylistVideos({
  playlistId,
  apiKey,
  maxResults = 8,
}: {
  playlistId: string;
  apiKey: string;
  maxResults?: number;
}): Promise<YouTubePlaylistVideo[]> {
  const endpoint = new URL("https://www.googleapis.com/youtube/v3/playlistItems");
  endpoint.searchParams.set("part", "snippet");
  endpoint.searchParams.set("playlistId", playlistId);
  endpoint.searchParams.set("maxResults", String(maxResults));
  endpoint.searchParams.set("key", apiKey);

  const res = await fetch(endpoint.toString(), {
    // cache server-side (ISR)
    next: { revalidate: 60 * 60 * 12 }, // 12h
  });

  if (!res.ok) return [];

  const data = (await res.json()) as YouTubePlaylistItemsResponse;

  const videos = data.items
    ?.map((it) => {
      const sn = it.snippet;
      const videoId = sn?.resourceId?.videoId;
      if (!videoId) return null;

      const thumb =
        sn?.thumbnails?.high?.url ||
        sn?.thumbnails?.medium?.url ||
        sn?.thumbnails?.default?.url ||
        "";

      const title = sn?.title || "YouTube video";
      const publishedAt = sn?.publishedAt || "";

      return {
        videoId,
        title,
        publishedAt,
        thumbnailUrl: thumb,
        url: `https://www.youtube.com/watch?v=${videoId}`,
      } satisfies YouTubePlaylistVideo;
    })
    .filter(Boolean) as YouTubePlaylistVideo[] | undefined;

  return videos ?? [];
}
