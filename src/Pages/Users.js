import { useState } from "react";
import DataTable from "react-data-table-component";

export default function Users() {
  const [userData, setUserdata] = useState([]);
  const [showEdit, setshowEdit] = useState(false);
  const ExpandedComponent = ({ data }) => (
    <pre>{JSON.stringify(data, null, 2)}</pre>
  );
  let data = [
    {
      id: "1",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "2",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "3",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "4",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "5",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "11",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "12",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "13",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "14",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "15",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "21",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "22",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "23",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "24",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    },
    {
      id: "25",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true"
    }
  ];

  const OnEdit = (e) => {
    alert(e.target.value);
    setshowEdit(true);
  };
  const columns = [
    {
      name: "id",
      selector: (row) => row.id
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true
    },
    {
      name: "age",
      selector: (row) => row.age
    },
    {
      name: "profileimage",
      selector: (row) => row.profileimage
    },
    {
      name: "isActive",
      selector: (row) => row.isActive
    },
    {
      name: "Edit",
      button: true,
      cell: (row) => (
        <button className="btn btn-primary" onClick={OnEdit} value={row.id}>
          Edit
        </button>
      )
    },
    {
      name: "Delete",
      button: true,
      cell: () => <button className="btn btn-primary">Delete</button>
    }
  ];

  const GetUsers = async () => {
    let url = `${process.env.SERVER_URL}/users`;
    // await fetch(url, {
    //   method: "GET",
    //   mode: "cors",
    //   headers: {
    //     "Content-Type": "application/json"
    //   }
    // })
    //   .then((res) => res.json())
    //   .then((data) => {
    //     console.log(JSON.stringify(data));
    //     setUserdata(data);
    //   })
    //   .catch((err) => {
    setUserdata(data);
    //     console.log(err);
    //   });
  };
  useState(() => {
    GetUsers();
  }, []);

  return (
    <>
      <div className="Users">
        {userData.length > 0 ? (
          <DataTable
            columns={columns}
            data={userData}
            expandableRowsComponent={ExpandedComponent}
            pagination
          />
        ) : (
          <div>No Data.......</div>
        )}
        {showEdit && <div>Edit</div>}
      </div>
    </>
  );
}
