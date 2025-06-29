import React, { useState, useEffect } from "react";
import axios from "axios";

const CMSAdminPanel = () => {
  // Image states
  const [imgTitle, setImgTitle] = useState("");
  const [imgDesc, setImgDesc] = useState("");
  const [imgFile, setImgFile] = useState(null);

  // Video states
  const [vidTitle, setVidTitle] = useState("");
  const [vidDesc, setVidDesc] = useState("");
  const [vidFile, setVidFile] = useState(null);
  const [videos, setVideos] = useState([]);

  // ✅ Upload IMAGE
  const submitImage = async () => {
    if (!imgFile) {
      alert("Please select an image file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", imgFile);
    formData.append("title", imgTitle);
    formData.append("description", imgDesc);

    try {
      const res = await axios.post("/api/images/upload", formData);
      console.log(res.data);
      alert("✅ Image uploaded!");
      setImgTitle("");
      setImgDesc("");
      setImgFile(null);
    } catch (err) {
      console.error(err);
      alert("❌ Image upload failed!");
    }
  };

  // ✅ Upload VIDEO
  const submitVideo = async () => {
    if (!vidFile) {
      alert("Please select a video file!");
      return;
    }

    const formData = new FormData();
    formData.append("file", vidFile);
    formData.append("title", vidTitle);
    formData.append("description", vidDesc);

    try {
      await axios.post("/api/videos/upload", formData);
      alert("✅ Video uploaded!");
      setVidTitle("");
      setVidDesc("");
      setVidFile(null);
      fetchVideos();
    } catch (err) {
      console.error(err);
      alert("❌ Video upload failed!");
    }
  };

  // Fetch uploaded videos
  const fetchVideos = async () => {
    try {
      const res = await axios.get("/api/videos");
      setVideos(res.data);
    } catch (err) {
      console.error("Failed to load videos", err);
    }
  };

  useEffect(() => {
    fetchVideos();
  }, []);

  return (
    <div className="container mt-5">
      <h1 className="mb-4">CMS Admin Panel</h1>

      {/* ========== IMAGE UPLOAD ========== */}
      <h2>📷 Image Upload</h2>
      <div className="mb-3">
        <label className="form-label">Image Title</label>
        <input
          type="text"
          className="form-control"
          value={imgTitle}
          onChange={(e) => setImgTitle(e.target.value)}
          placeholder="Enter image title"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Image Description</label>
        <textarea
          className="form-control"
          value={imgDesc}
          onChange={(e) => setImgDesc(e.target.value)}
          placeholder="Enter image description"
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Select Image File</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setImgFile(e.target.files[0])}
          accept="image/*"
        />
      </div>

      <button className="btn btn-primary me-2" onClick={submitImage}>
        Upload Image
      </button>
      <button
        className="btn btn-secondary mb-4"
        onClick={() => {
          setImgTitle("");
          setImgDesc("");
          setImgFile(null);
        }}
      >
        Reset Image Form
      </button>

      <hr />

      {/* ========== VIDEO UPLOAD ========== */}
      <h2>🎥 Video Upload</h2>
      <div className="mb-3">
        <label className="form-label">Video Title</label>
        <input
          type="text"
          className="form-control"
          value={vidTitle}
          onChange={(e) => setVidTitle(e.target.value)}
          placeholder="Enter video title"
        />
      </div>

      <div className="mb-3">
        <label className="form-label">Video Description</label>
        <textarea
          className="form-control"
          value={vidDesc}
          onChange={(e) => setVidDesc(e.target.value)}
          placeholder="Enter video description"
        ></textarea>
      </div>

      <div className="mb-3">
        <label className="form-label">Select Video File</label>
        <input
          type="file"
          className="form-control"
          onChange={(e) => setVidFile(e.target.files[0])}
          accept="video/*"
        />
      </div>

      <button className="btn btn-success me-2" onClick={submitVideo}>
        Upload Video
      </button>
      <button
        className="btn btn-secondary mb-4"
        onClick={() => {
          setVidTitle("");
          setVidDesc("");
          setVidFile(null);
        }}
      >
        Reset Video Form
      </button>

      <hr />

      {/* ========== VIDEO LIST ========== */}
      <h2>📁 Uploaded Videos</h2>
      <div className="row">
        {videos.map((vid) => (
          <div key={vid._id} className="col-md-6 mb-4">
            <h5>{vid.title}</h5>
            <video width="100%" controls>
              <source
                src={`http://localhost:5000${vid.filePath}`}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
            <p>{vid.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CMSAdminPanel;
