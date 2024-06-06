import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Box } from "@mui/material";
import { Videos, ChannelCards } from "./index";
import { fetchFromApi } from "../utils/fetchFromApi";

const ChannelDetail = () => {
  const { id } = useParams();
  const [channelDetail, setChannelDetail] = useState(null);
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    fetchFromApi(`channels?part=snippet&id=${id}`).then((data) =>
      setChannelDetail(data?.items[0])
    );

    fetchFromApi(`search?channelId=${id}&part=snippet&order=date`).then(
      (data) => setVideos(data?.items)
    );
  }, [id]);

  return (
    <Box minHeight={"95vh"}>
      <Box>
        <div
          style={{
            background:
              " linear-gradient(90deg, rgba(131,58,180,1) 0%, rgba(253,29,29,1) 89%, rgba(252,176,69,1) 100%)",
            zIndex: 10,
            height: "300px",
          }}
        />
        <ChannelCards channelDetail={channelDetail} marginTop={"-110px"} />
      </Box>
      <Box display={"flex"} p="2">
        <Box sx={{ mr: { sm: "150px" } }} />
        <Videos videos={videos} />
      </Box>
    </Box>
  );
};

export default ChannelDetail;
