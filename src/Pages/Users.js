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
  const [url, setUrl] = useState(`${process.env.REACT_APP_SERVER_URL}/users`);
  const { data, isPending, error, fetchData } = useFetch(url, fetchOption);
  const [CUrrentuserData, setCUrrentuserData] = useState([]);
  const [showAddEditWindow, setshowAddEditWindow] = useState(false);
  const [ShowbtnAdd, setShowbtnAdd] = useState(true);
const[checkAddUser, setcheckAddUser] = useState(false);
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
  const ExpandedComponent = ({ data1 }) => (
    <pre>{JSON.stringify(data1, null, 2)}</pre>
  );
  const OnEdit = (e) => {
    setshowAddEditWindow(true);
    let crrdata = data.filter((x) => x.id === e.target.value)[0];
    setCUrrentuserData(crrdata);
    setShowbtnAdd(false);
    setcheckAddUser(false);

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

  const onFormSubmit = async (e) => {
    e.preventDefault();
    debugger;
  //use the useFetch hook to  post data to server
    let urlPost = '';
    if(checkAddUser){
      urlPost = `${process.env.REACT_APP_SERVER_URL}/users/add`;
      CUrrentuserData.id='-1';
    }
      else
      {
        urlPost = `${process.env.REACT_APP_SERVER_URL}/users/edit`;
      }
    setUrl(urlPost);
    FOptions.method="POST";
    FOptions.body = JSON.stringify(CUrrentuserData); //CUrrentuserData;
    SetFetchOption(FOptions);


  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setCUrrentuserData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const OnAdd = async (e) => {
    setshowAddEditWindow(true);
    setCUrrentuserData({});
    setShowbtnAdd(false);
    setcheckAddUser(true);
  };
  const OnCancel = async (e) => {
    setshowAddEditWindow(false);
    setCUrrentuserData({});
    setShowbtnAdd(true);
    setcheckAddUser(false);

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
                  name="name"
                  onChange={handleChange}

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
                  onChange={handleChange}
                  name="age"
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
                  onChange={handleChange}
                  name="emailid"
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
                  onChange={handleChange}
                  name="password"
                />
              </div>
              <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                <button className="btn btn-primary" type="submit">
                  Done
                </button>
                <input
                  className="btn btn-primary"
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
