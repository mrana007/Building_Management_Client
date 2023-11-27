import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosPublic from "./useAxiosPublic";

const useAdmin = () => {
    const { user } = useAuth();
    
    const axiosPublic = useAxiosPublic()
    const { data: isAdmin, isPending: isAdminLoading } = useQuery({
        queryKey: [user?.email, 'isAdmin'],
        queryFn: async () => {
            console.log('asking or checking is admin', user)
            const res = await axiosPublic.get(`/users/admin/${user?.email}`);
            // console.log("adminnnnnnnnnn", res.data);
            return res.data?.admin;
        }
    })
    return [isAdmin, isAdminLoading]
};

export default useAdmin;