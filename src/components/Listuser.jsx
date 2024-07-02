import React, {useEffect} from "react";
import {Container, Row, Col, Button, Form} from "react-bootstrap";
import {useDispatch, useSelector} from "react-redux";
import {deleteCustomer, fetchPosts} from "../slice/customerSlice";

export default function Listuser() {
  const dispatch = useDispatch();
  const userlist = useSelector((state) => state.customers.users);
  const {postData} = useSelector((state) => state.customers);

  // useEffect(() => {

  // }, [dispatch]);

  const handleDelete = (val) => {
    dispatch(deleteCustomer(val));
    dispatch(fetchPosts());
    console.log("postData", postData);
  };

  return (
    <Container className="mt-5">
      <div>
        <ul style={{listStyle: "none"}}>
          {userlist.map((users, index) => (
            <li key={index}>
              {users}
              <Button
                variant="danger"
                type="button"
                onClick={() => {
                  handleDelete(index);
                }}
              >
                delete
              </Button>
            </li>
          ))}
        </ul>
      </div>
      <div>
        {postData.map((data) => (
          <p>{data.title}</p>
        ))}
      </div>
    </Container>
  );
}
