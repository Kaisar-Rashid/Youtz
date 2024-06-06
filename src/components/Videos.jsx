import React from "react";
import { Stack, Box } from "@mui/material";
import { VideoCards, ChannelCards } from "./index";

const Videos = ({ videos, direction }) => {
  if (!videos?.length) return "Loading";
  return (
    <Stack
      direction={direction || "row"}
      flexWrap={"wrap"}
      justifyContent={"start"}
      gap={2}
    >
      {videos.map((item, idx) => (
        <Box key={idx}>
          {item.id.videoId && <VideoCards video={item} />}
          {item.id.channelId && <ChannelCards channelDetail={item} />}
        </Box>
      ))}
    </Stack>
  );
};

export default Videos;
