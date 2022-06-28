import React, { useEffect } from "react";
//Bootstrap and jQuery libraries
import "bootstrap/dist/css/bootstrap.min.css";
import "jquery/dist/jquery.min.js";
//Datatable Modules
import "datatables.net-dt/js/dataTables.dataTables";
import "datatables.net-dt/css/jquery.dataTables.min.css";
import $ from "jquery";

import "../Dashboard/dataTable.css";

const data_table = [
  {
    SrNo: "1",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem "
  },
  {
    SrNo: "2",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem "
  },
  {
    SrNo: "3",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "4",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "5",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "6",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },

  {
    SrNo: "7",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "8",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "9",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "10",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "11",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "12",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "13",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "14",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {},
  {
    SrNo: "15",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "16",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "17",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "18",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "19",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "20",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "21",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "22",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "23",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "24",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "25",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "26",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "27",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "28",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "29",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "30",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
  {
    SrNo: "31",
    Name: "Abhishek Kapoor",
    status: "IN",
    From: "20/01/2022",
    Time: "10:00 am",
    To: "24/01/2022",
    Time: "10:00 am",
    ApprovedByWarden:"Santosh Kumar ",
    Reason:"Lorem ",
  },
];

const DataTable = () => {
  //initialize datatable
  useEffect(() => {
    $(document).ready(function () {
      $("#example").DataTable();
    });
  });

  return (
    <div>
      
      <div className="container">
        <table id="example" className="display table_wd">
          <thead className="table_head">
            <tr>
              <th>Sr.No</th>
              <th> Name</th>
              <th>Status</th>
              <th>From</th>
              <th>Time</th>
              <th>To</th>
              <th>Time</th>
              <th> Approved By Warden</th>
              <th>Reason</th>
            </tr>
          </thead>
          <tbody>
            {data_table.map((item) => {
              return (
                <tr className="table_row" >
                  <td className="table_d">{item.SrNo}</td>
                  <td className="table_d">{item.Name}</td>
                  <td className="table_d">{item.status}</td>
                  <td className="table_d">{item.From}</td>
                  <td className="table_d">{item.Time}</td>
                  <td className="table_d">{item.To}</td>
                  <td className="table_d">{item.Time}</td>
                  <td className="table_d">{item.ApprovedByWarden}</td>
                  <td className="table_d">{item.Reason}</td>
                  
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DataTable;
