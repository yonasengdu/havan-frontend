import React, { FC, useEffect, useState } from "react";
import { DataGrid } from "@mui/x-data-grid";
import { Box, Button, Modal } from "@mui/material";
import { AiOutlineDelete, AiOutlineMail } from "react-icons/ai";
import { useTheme } from "next-themes";
import Loader from "../../Loader/Loader";
import { format } from "timeago.js";
import {
  useGetAllUsersWithCourseQuery,
  useUpdateUserRoleMutation,
} from "@/redux/features/user/userApi";
import { styles } from "@/app/styles/style";
import { toast } from "react-hot-toast";
import { useApproveRejectAccessMutation } from "@/redux/features/orders/ordersApi";
import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";

type Props = {
  isTeam?: boolean;
};

const AllInvoices: FC<Props> = ({ isTeam }) => {

  const [page, setpage] = useState(0)
  const [dir, setdir] = useState(1)

  const { theme, setTheme } = useTheme();
  const [active, setActive] = useState(false);
  const [open, setOpen] = useState(false);
  const [rowData, setRowData] = useState({"userId":"", "courseId":""});
  const [newData, setnewData] = useState({"userEmail":"", "courseId":""});

  
  const { isLoading:courseLoading, data:courseData, refetch:courseRefetch } = useGetAllCoursesQuery(
    {},
    { refetchOnMountOrArgChange: true }
    );
    
    const { isLoading, data, refetch } = useGetAllUsersWithCourseQuery(
      {page: page, dir:dir},
      { refetchOnMountOrArgChange: true }
      );
      const [ApproveRejectAccess, { isSuccess: accessSuccess, error: accessError }] =
      useApproveRejectAccessMutation({});
      
      useEffect(() => {
        
        courseRefetch()
        refetch()
        
        if (accessSuccess) {
          refetch();
          courseRefetch()
          toast.success("added user access successfully!");
          setOpen(false);
        }
        if (accessError) {
          if ("data" in accessError) {
            const errorMessage = accessError as any;
            toast.error(errorMessage.data.message);
          }
        }
      }, [accessSuccess, accessError, page,dir]);
      
      const rows: any = [];

  data &&
  data?.usersWithCourseDetails?.forEach((user: any) => {
    user.courses.forEach((course: any) => {
      rows.push({
        id: user._id,
        name: user.name,
        email: user.email,
        courseId: course._id,  
        courseName: course.name,  
      });
    });
  });

  // console.log("+============", rows)

  const handleSubmit = async () => {

    await ApproveRejectAccess({  userEmail:newData.userEmail,courseId:newData.courseId });
    setActive(false)
  };

  
  // const handlePaginationSubmit = async () => {
  //   refetch()
  // };


  const handleDelete = async () => {
    const id = rowData.userId;
    const courseID = rowData.courseId
    await ApproveRejectAccess({  userId: id,courseId:courseID });

  };

  return (
    <div className="mt-[100px] h-screen">
      {isLoading ? (
        <Loader />
      ) : (
        <div className="px-8 m-5 h-[80%] flex flex-col justify-between"  >

                
           
              <table className="w-full">
                <thead className="bg-gray-50 border-b-2 border-gray-200">
                <tr>
                  <th className="text-black w-20 p-3 text-md font-semibold tracking-wide text-left">User Id</th>
                  <th className="text-black w-24 p-3 text-md font-semibold tracking-wide text-left">Email</th>
                  <th className="text-black w-24 p-3 text-md font-semibold tracking-wide text-left">Course Name</th>
                  <th className="text-black p-3 text-md font-semibold tracking-wide text-left">Name</th>
                  <th className="text-black w-32 p-3 text-md font-semibold tracking-wide text-left">Remove Access</th>
                </tr>
                </thead>
                <tbody className="divide-y divide-gray-100">
                {rows && rows?.map((row:any)=>{
                        return (
                          <tr key={`${row.id}${row.courseId}`} className="bg-white">
                          <td className="p-3 text-md text-gray-700 whitespace-nowrap">
                            <p className="font-bold text-blue-500 hover:underline">{row.id}</p>
                          </td>
                          <td className="p-3 text-md text-gray-700 whitespace-nowrap">
                          <span
                            className="p-1.5 text-xs font-medium uppercase tracking-wider text-green-800 bg-green-200 rounded-lg bg-opacity-50">{row.email}</span>
                          </td>
                  
                          <td className="p-3 text-md text-gray-700 whitespace-nowrap">{row.courseName}</td>
                          <td className="p-3 text-md text-gray-700 whitespace-nowrap">
                          {row.name}
                          </td>
                  
                          <td className="p-3 text-md text-gray-700 whitespace-nowrap cursor-pointer" onClick={() => {
                                setOpen(!open);
                                setRowData({userId: row.id, courseId: row.courseId});
                              }}>
                                <AiOutlineDelete/>
                              </td>
                        </tr>)
                      })}
              
                </tbody>
              </table>



            <div className="w-full flex justify-between">
                
               <button className="btn h-8 bg-blue-500 px-6" onClick={() => setActive(!active)}>Add Access</button>

                <div className="flex justify-center items-center gap-8 ">
                  <button className="btn h-8 bg-blue-500 px-6" onClick={()=> {setpage(page-1); setdir(-1)}}  disabled={page==0}>Prev</button>
                  <button className="btn h-8 bg-blue-500 px-6" onClick={()=>{ setpage(page+1); setdir(1)}} >Next</button>
                </div>

            </div>



   
            
   
          
          {active && (
            <Modal
              open={active}
              onClose={() => setActive(!active)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                <h1 className={`${styles.title}`}>Add New Member</h1>
                <div className="mt-4">
                  <input
                    type="email"
                    value={newData.userEmail}
                    onChange={(e) => setnewData({...newData, userEmail:e.target.value})}
                    placeholder="Enter email..."
                    className={`${styles.input}`}
                  />
                  <select
                    name=""
                    id=""
                    className={`${styles.input} !mt-6`}
                    onChange={(e: any) => setnewData({...newData, courseId:e.target.value})
                    }
                  >
                    <option value={"SELECT COURSE"}>"select course</option>
                  {
                    courseData&& courseData?.courses.map((course:any, id: number)=>{
                    return <option key={course._id} value={course._id}>{course.name}</option>
                    })
                    
                  }
                  </select>
                  <br />
                  <div
                    className={`${styles.button} my-6 !h-[30px]`}
                    onClick={handleSubmit}
                  >
                    Submit
                  </div>
                </div>
              </Box>
            </Modal>
          )}

          {open && (
            <Modal
              open={open}
              onClose={() => setOpen(!open)}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box className="absolute top-[50%] left-[50%] -translate-x-1/2 -translate-y-1/2 w-[450px] bg-white dark:bg-slate-900 rounded-[8px] shadow p-4 outline-none">
                <h1 className={`${styles.title}`}>
                  Are you sure you want to remove the course this user?
                </h1>
                <div className="flex w-full items-center justify-between mb-6 mt-4">
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#57c7a3]`}
                    onClick={() => setOpen(!open)}
                  >
                    Cancel
                  </div>
                  <div
                    className={`${styles.button} !w-[120px] h-[30px] bg-[#d63f3f]`}
                    onClick={handleDelete}
                  >
                    Remove
                  </div>
                </div>
              </Box>
            </Modal>
          )}
        </div>
      )}
    </div>
  );
};

export default AllInvoices;





















// import React, { useEffect, useState } from "react";
// import { DataGrid, GridToolbar } from "@mui/x-data-grid";
// import { Box } from "@mui/material";
// import { useTheme } from "next-themes";
// import { useGetAllCoursesQuery } from "@/redux/features/courses/coursesApi";
// import Loader from "../../Loader/Loader";
// import { format } from "timeago.js";
// import { useGetAllOrdersQuery, useApproveRejectOrderMutation } from "@/redux/features/orders/ordersApi";
// import { useGetAllUsersQuery } from "@/redux/features/user/userApi";
// import { AiOutlineBulb, AiOutlineClose, AiOutlineMail } from "react-icons/ai";

// type Props = {
//   isDashboard?: boolean;
// };

// const AllInvoices = ({ isDashboard }: Props) => {
//   const { theme, setTheme } = useTheme();
//   const { isLoading, data } = useGetAllOrdersQuery({});
//   const { data: usersData } = useGetAllUsersQuery({});
//   const { data: coursesData } = useGetAllCoursesQuery({});
//   const [ApproveRejectOrder, { data: x }] = useApproveRejectOrderMutation();




//   const handleApproval = (rowData:any)=>{

//     let {id,userId,courseId} = rowData

//     ApproveRejectOrder({ orderId: id, userId: userId,courseId:courseId });

//     window.location.reload()

//   }


//   const [orderData, setOrderData] = useState<any>([]);

//   useEffect(() => {
//     if (data) {
//       const temp = data.orders.map((item: any) => {

//         let userId ;
//         let courseId;
//         const user = usersData?.users.find(
//           (user: any) => {
//             if (user._id === item.userId){
//               userId = user._id;
//             }
//             return user._id === item.userId
//           }
//         );
//         const course = coursesData?.courses.find(
//           (course: any) => {

//             if (course._id === item.courseId){
//               courseId = course._id
//             }
//             return course._id === item.courseId
//           }
//         );

//         return {
//           ...item,
//           courseId: (userId && courseId) && courseId,
//           userId: (userId && courseId) && userId,
//           userName: user?.name,
//           userEmail: user?.email,
//           title: course?.name,
//           price: "$" + course?.price,
//         };
//       });
//       setOrderData(temp);
//     }
//   }, [data, usersData, coursesData,]);

//   const columns: any = [
//     { field: "id", headerName: "ID", flex: 0.3 },
//     { field: "userName", headerName: "Name", flex: isDashboard ? 0.6 : 0.5 },
//     ...(isDashboard
//       ? []
//       : [
//           { field: "userEmail", headerName: "Email", flex: 1 },
//           { field: "title", headerName: "Course Title", flex: 1 },
//           { field: "access", headerName: "Course Access", flex: 1,
//           renderCell: (params: any) => {

//               let rowData = params.row;
              
//               if (params.row.access==="Denied")
//               return   <div onClick={()=>handleApproval(rowData)} className="hover:cursor-pointer">
//               <AiOutlineBulb
//                 className="dark:text-white text-black"
//                 size={20}
//               />
//             </div>

//             return (
//               <div onClick={()=> handleApproval(rowData)} className="hover:cursor-pointer">
//                 <AiOutlineClose 
//                   className="dark:text-white text-black"
//                   size={20}
//                 />
//               </div>
//             );
//           },
        
        
//         },
//         ]),
//     { field: "price", headerName: "Price", flex: 0.5 },
//     ...(isDashboard
//       ? [{ field: "created_at", headerName: "Created At", flex: 0.5 }]
//       : [
//           {
//             field: " ",
//             headerName: "Email",
//             flex: 0.2,
//             renderCell: (params: any) => {
//               return (
//                 <a href={`mailto:${params.row.userEmail}`}>
//                   <AiOutlineMail
//                     className="dark:text-white text-black"
//                     size={20}
//                   />
//                 </a>
//               );
//             },
//           },
//         ]),
//   ];

//   const rows: any = [];

//   orderData &&
//     orderData.forEach((item: any) => {
//       rows.push({
//         id: item._id,
//         userId: item.userId,
//         courseId: item.courseId,
//         access: item.access,
//         userName: item.userName,
//         userEmail: item.userEmail,
//         title: item.title,
//         price: item.price,
//         created_at: format(item.createdAt),
//       });
//     });

//   return (
//     <div className={!isDashboard ? "mt-[120px]" : "mt-[0px]"}>
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Box m={isDashboard ? "0" : "40px"}>
//           <Box
//             m={isDashboard ? "0" : "40px 0 0 0"}
//             height={isDashboard ? "35vh" : "90vh"}
//             overflow={"hidden"}
//             sx={{
//               "& .MuiDataGrid-root": {
//                 border: "none",
//                 outline: "none",
//               },
//               "& .css-pqjvzy-MuiSvgIcon-root-MuiSelect-icon": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-sortIcon": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-row": {
//                 color: theme === "dark" ? "#fff" : "#000",
//                 borderBottom:
//                   theme === "dark"
//                     ? "1px solid #ffffff30!important"
//                     : "1px solid #ccc!important",
//               },
//               "& .MuiTablePagination-root": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-cell": {
//                 borderBottom: "none!important",
//               },
//               "& .name-column--cell": {
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-columnHeaders": {
//                 backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
//                 borderBottom: "none",
//                 color: theme === "dark" ? "#fff" : "#000",
//               },
//               "& .MuiDataGrid-virtualScroller": {
//                 backgroundColor: theme === "dark" ? "#1F2A40" : "#F2F0F0",
//               },
//               "& .MuiDataGrid-footerContainer": {
//                 color: theme === "dark" ? "#fff" : "#000",
//                 borderTop: "none",
//                 backgroundColor: theme === "dark" ? "#3e4396" : "#A4A9FC",
//               },
//               "& .MuiCheckbox-root": {
//                 color:
//                   theme === "dark" ? `#b7ebde !important` : `#000 !important`,
//               },
//               "& .MuiDataGrid-toolbarContainer .MuiButton-text": {
//                 color: `#fff !important`,
//               },
//             }}
//           >
//             <DataGrid
//               checkboxSelection={isDashboard ? false : true}
//               rows={rows}
//               columns={columns}
//               components={isDashboard ? {} : { Toolbar: GridToolbar }}
//             />
//           </Box>
//         </Box>
//       )}
//     </div>
//   );
// };

// export default AllInvoices;
