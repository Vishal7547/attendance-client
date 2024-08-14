import { useContext, useEffect, useState } from "react";
import { userContext } from "./context";
import axios from "axios";
export const useUser = () => {
  return useContext(userContext);
};
const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [semester, setSemester] = useState([]);
  const [session, setSession] = useState([]);
  const [branch, setBranch] = useState([]);
  const [student, setStudent] = useState([]);
  const [subject, setSubject] = useState([]);
  const [teacher, setTeacher] = useState([]);

  const [studentTableUpdate, setStudentTableUpdate] = useState(false);
  useEffect(() => {
    const currentUser = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/current/user`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setUser(data?.user);
        }
      } catch (e) {
        console.log(e);
      }
    };
    currentUser();
  }, []);
  useEffect(() => {
    const getSession = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/session`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setSession(data?.session);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getSession();
  }, []);
  useEffect(() => {
    const getBranch = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/branch`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setBranch(data?.branch);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getBranch();
  }, []);
  useEffect(() => {
    const getSemester = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/semester`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setSemester(data?.semester);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getSemester();
  }, []);
  useEffect(() => {
    const getStudent = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setStudent(data?.user);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getStudent();
  }, [studentTableUpdate]);
  useEffect(() => {
    const getSubject = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/subject`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setSubject(data?.subject);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getSubject();
  }, []);
  useEffect(() => {
    const getTeacher = async () => {
      try {
        const { data } = await axios.get(
          `${process.env.REACT_APP_BACKEND_URL}/user/teacher`,
          {
            headers: {
              "Content-Type": "application/json",
              Authorization: localStorage.getItem("token"),
            },
          }
        );
        if (data.success) {
          setTeacher(data?.teacher);
        }
      } catch (e) {
        console.log(e);
      }
    };
    getTeacher();
  }, []);
  return (
    <userContext.Provider
      value={{
        setUser,
        user,
        semester,
        session,
        branch,
        student,
        subject,
        studentTableUpdate,
        setStudentTableUpdate,
        teacher,
      }}
    >
      {children}
    </userContext.Provider>
  );
};

export default UserProvider;
