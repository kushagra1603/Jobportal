import { COMPANY_API_END_POINT } from "@/components/ui/utils/constant";
import { setCompanies } from "@/redux/companySlice";
import axios from "axios";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";

const useGetAllCompanies = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCompanies = async () => {
      try {
        const res = await axios.get(`${COMPANY_API_END_POINT}/get`, {
          withCredentials: true,
        });

        if (res.data.success) {
          dispatch(setCompanies(res.data.companies));
          console.log("called");
        }
      } catch (error) {
        console.log(error);
        console.log("error");
      }
    }
    fetchCompanies();
  }, []);
};

export default useGetAllCompanies;
