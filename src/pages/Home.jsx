import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ListCard from "../components/ListCard";
import GridCard from "../components/GridCard";
import toast from "react-hot-toast";
import { api_base_url } from "../helper";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const [isGridLayout, setIsGridLayout] = useState(false);
  const [isCreateModelShow, setIsCreateModelShow] = useState(false);
  const [projectTitle, setProjectTitle] = useState("");
  const navigate = useNavigate();

  const createProject = (e) => {
    if (projectTitle === "") {
      toast.error("Please enter a project title");
    } else {
      fetch(`${api_base_url}/create-project`, {
        mode: "cors",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title: projectTitle,
          userId: localStorage.getItem("userId"),
        }),
      })
        .then((res) => res.json())
        .then((data) => {
          if (data.success) {
            setIsCreateModelShow(false);
            setProjectTitle("");
            toast.success("Project Created");
            navigate(`/editor/${data.projectId}`);
          } else toast.error("Something went wrong");
        });
    }
  };
  const [data, setData] = useState(null);
  const getProjects = () => {
    fetch(`${api_base_url}/get-projects`, {
      mode: "cors",
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        userId: localStorage.getItem("userId"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setData(data.getProjects);
        } else {
          console.error("Something went wrong");
        }
      });
  };
  useEffect(() => {
    getProjects();
  }, []);

  return (
    <>
      <Navbar />
      <div className="flex items-center justify-between px-[100px] my-[20px]">
        <h2 className="text-2xl">Hi, Islam</h2>
        <div className="flex items-center gap-1">
          <div className="inputBox !w-[350px]">
            <input type="text" placeholder="Search Here..." />
          </div>
          <button
            onClick={() => {
              setIsCreateModelShow(true);
            }}
            className="btnBlue rounded-[5px] mb-4 text-[20px] !p-[5px] !px-[10px]"
          >
            +
          </button>
        </div>
      </div>

      <div className="cards">
        {isGridLayout ? (
          <div className="grid px-[100px]">
            {data
              ? data.map((item, index) => {
                  return <GridCard key={index} item={item} />;
                })
              : ""}
          </div>
        ) : (
          <div className="list px-[100px]">
            {" "}
            {data
              ? data.map((item, index) => {
                  return <ListCard key={index} item={item} />;
                })
              : ""}
          </div>
        )}
      </div>
      {isCreateModelShow ? (
        <>
          <div className="createModelCon flex top-0 right-0 bottom-0 w-screen h-screen bg-[rgb(0,0,0,0.1)] fixed items-center justify-center">
            <div className="createModel w-[25vw] h-[28vh] shadow-lg shadow-black/50 bg-[#141414] rounded-[10px] p-[20px]">
              <h3 className="text-2xl">Create New Project</h3>
              <div className="inputBox !bg-[#202020] mt-4">
                <input
                  type="text"
                  onChange={(e) => {
                    setProjectTitle(e.target.value);
                  }}
                  value={projectTitle}
                  placeholder="Project Title"
                />
              </div>
              <div className="flex items-center gap-[10px] w-full mt-2">
                <button
                  onClick={createProject}
                  className="btnBlue rounded-[5px] w-[49%] !p-[10px] !px-[10px] mb-4 !py-[10px]"
                >
                  Create
                </button>
                <button
                  onClick={() => {
                    setIsCreateModelShow(false);
                  }}
                  className="btnBlue rounded-[5px] w-[49%] !p-[10px] !px-[10px] mb-4 !bg-[#1A1919] !py-[10px]"
                >
                  Cancel
                </button>
              </div>
            </div>
          </div>
        </>
      ) : (
        ""
      )}
    </>
  );
};

export default Home;
