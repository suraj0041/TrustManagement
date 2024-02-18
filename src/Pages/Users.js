import { useEffect, useState } from "react";
import DataTable from "react-data-table-component";
import { useFetch } from "../Hooks/UseFetch";

export default function Users() {
  let FOptions = {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/json",
    },
  };
  const [fetchOption, SetFetchOption] = useState(FOptions);
  const [url, setUrl] = useState(`${process.env.SERVER_URL}/users`);
  const { data, isPending, error, fetchData } = useFetch(url, fetchOption);
  const [CUrrentuserData, setCUrrentuserData] = useState([]);
  const [showAddEditWindow, setshowAddEditWindow] = useState(false);
  const [ShowbtnAdd, setShowbtnAdd] = useState(true);

  const ExpandedComponent = ({ data1 }) => (
    <pre>{JSON.stringify(data1, null, 2)}</pre>
  );
  let data1 = [
    {
      id: "1",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "2",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "3",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "4",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "5",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "11",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "12",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "13",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "14",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "15",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "21",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "22",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "23",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "24",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
    {
      id: "25",
      name: "suraj",
      age: "29",
      profileimage: "profileimage",
      isActive: "true",
    },
  ];

  const OnEdit = (e) => {
    setshowAddEditWindow(true);
    let crrdata = data.filter((x) => x.id === e.target.value)[0];
    setCUrrentuserData(crrdata);
    setShowbtnAdd(false);
  };
  const OnDelete = (e) => {
    alert(e.target.value);
    // setshowEdit(false);
    // setUrl(`${process.env.SERVER_URL}/delete`);
    // FOptions.method = "POST";
    // FOptions.body = JSON.parse({ id: e.target.value });
    // SetFetchOption(FOptions);
    // fetchData();
  };
  const columns = [
    {
      name: "id",
      selector: (row) => row.id,
    },
    {
      name: "name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "emailid",
      selector: (row) => row.emailid,
      sortable: true,
    },
    {
      name: "age",
      selector: (row) => row.age,
    },
    {
      name: "profileimage",
      selector: (row) => row.profileimage,
    },
    {
      name: "isActive",
      selector: (row) => row.isActive,
    },
    {
      name: "Edit",
      button: true,
      cell: (row) => (
        <button className="btn btn-primary" onClick={OnEdit} value={row.id}>
          Edit
        </button>
      ),
    },
    {
      name: "Delete",
      button: true,
      cell: (row) => (
        <button className="btn btn-primary" onClick={OnDelete} value={row.id}>
          Delete
        </button>
      ),
    },
  ];

  const GetUsers = async () => {
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
    // console.log(isPending);
    if (!FisPending) {
      setUserdata(Fdata);
    }
    //     console.log(err);
    //   });
  };
  const onFormSubmit = async (e) => {
    e.preventDefault();
  };
  const OnAdd = async (e) => {
    setshowAddEditWindow(true);
    setCUrrentuserData({});
    setShowbtnAdd(false);
  };
  const OnCancel = async (e) => {
    setshowAddEditWindow(false);
    setCUrrentuserData({});
    setShowbtnAdd(true);
  };
  return (
    <>
      <div className="Users">
        {/* {JSON.stringify(data)} */}
        {data && (
          <DataTable
            columns={columns}
            data={data}
            expandableRowsComponent={ExpandedComponent}
            pagination
          />
        )}
        {ShowbtnAdd && (
          <div className="d-grid gap-2 d-md-flex justify-content-md-end">
            <button type="button" className="btn btn-primary" onClick={OnAdd}>
              Add
            </button>
          </div>
        )}
        {showAddEditWindow && (
          <div>
            <hr />
            Add/Edit/Delete
            <form className="row g-3" onSubmit={onFormSubmit}>
              <div className="col-md-6">
                <label for="username" className="form-label">
                  User name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="username"
                  value={CUrrentuserData.name}
                  required
                />
              </div>
              <div className="col-md-6">
                <label for="age" className="form-label">
                  Age
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="age"
                  value={CUrrentuserData.age}
                />
              </div>
              <div className="col-md-6">
                <label for="inputEmail4" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="inputEmail4"
                  required
                  value={CUrrentuserData.emailid}
                />
              </div>
              <div className="col-md-6">
                <label for="inputPassword4" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  className="form-control"
                  id="inputPassword4"
                  required
                  value={CUrrentuserData.password}
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button class="btn btn-primary" type="submit">
                  Done
                </button>
                <input
                  class="btn btn-primary"
                  type="button"
                  value="Cancel"
                  onClick={OnCancel}
                />
              </div>
            </form>
          </div>
        )}
      </div>
    </>
  );
}
