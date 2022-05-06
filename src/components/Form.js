import styled from "styled-components";
import { useState } from "react";

const FormDiv = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  padding: 30px 20px 60px;
  width: 692px;
  height: 814px;
  background: #ffffff;
  box-shadow: 0px 4px 13px rgba(0, 0, 0, 0.1);
  border-radius: 15px;

  h2 {
    letter-spacing: 2px;
    color: black;
  }
  input[type=submit] {
    font-family: "Nunito";
    font-style: normal;
    font-weight: bold;
    background: rgb(253,121,96);
    background: linear-gradient(90deg, rgba(253,121,96,1) 0%, rgba(225,90,216,1) 100%);
    padding-top: 10px;
    padding-bottom: 10px;
    width: 100%;
    border-radius: 10px;
    margin: auto;
    text-decoration: none;
    border: none;
    color: white;
    font-size: 17px;
    }
    lineBreak {
      display: block;
      margin-bottom: 7px;
    }
    span {
      display: flex;
      flex-direction: row;
      width: 100%;
    }
`;

const InputDiv = styled.div`
  padding: 6px 0px;

  input,
  label,
  select {
    display: block;
    font-family: "Poppins", sans-serif;
    letter-spacing: 2px;
    color: #555555;
    padding: 5px 0px;
    border-radius: 8px;
    border-width: .7px;
    // padding-left: 10px;
  }
  label {
    font-weight: 450;
    padding-right: 50px;
  }

  .jobTypeLabel {
    display: inline-block;
  }
  fieldset {
    display: flex;
    flex-direction: column;
    border-radius: 8px;
    border-width: 2px;
    width: 400px;
  }
  .textFieldBox {
    width: 150%;
    padding-left: 10px;
  }
  #description {
    text-align: left;
    padding: 5px 0px 60px 10px;
    // overflow-wrap: break-word;
    // overflow-y: auto;
  }
`;

const Form = () => {
  const [inputs, setInputs] = useState({});

  const handleChange = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setInputs((values) => ({ ...values, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    alert(inputs);
  };

  return (
    <FormDiv>
      <form onSubmit={handleSubmit}>
        <h2>POST A JOB</h2>
        <InputDiv>
          <label>
            COMPANY NAME
            <input
              type="text"
              name="name"
              value={inputs.name || ""}
              onChange={handleChange}
              placeholder="GOOGLE"
              class="textFieldBox"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB TITLE
            <input
              type="text"
              name="title"
              value={inputs.title || ""}
              onChange={handleChange}
              placeholder="SOFTWARE ENGINEER"
              class="textFieldBox"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB DESCRIPTION
            <input
              type="text"
              name="description"
              value={inputs.description || ""}
              onChange={handleChange}
              placeholder="DESCRIBE THE JOBS"
              class="textFieldBox"
              id="description"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            SALARY / YEAR
            <input
              type="number"
              name="minSalary"
              value={inputs.salary || ""}
              onChange={handleChange}
              placeholder="MIN"
              class="textFieldBox"
            />
            <lineBreak />
            <input
              type="number"
              name="maxSalary"
              value={inputs.salary || ""}
              onChange={handleChange}
              placeholder="Max (Optional)"
              class="textFieldBox"
            />
          </label>
        </InputDiv>

        <InputDiv>
          <label for="heading">JOB TYPE</label>
          <fieldset>
            <span>
              <div>
                <input type="radio" id="fulltime" name="drone" value="fulltime" />
                <label for="fulltime">FULL-TIME</label>
              </div>

              <div>
                <input type="radio" id="partTime" name="drone" value="partTime" />
                <label for="partTime">PART-TIME</label>
              </div>
            </span>     
            <span>
              <div>
                <input
                  type="radio"
                  id="internship"
                  name="drone"
                  value="internship"
                  placeholder="Optional"
                />
                <label for="internship">INTERNSHIP</label>
              </div>
              <div>
                <input type="radio" id="contract" name="drone" value="contract" />
                <label for="contract">CONTRACT</label>
              </div>
              <div>
                <input type="radio" id="other" name="drone" value="other" />
                <label for="other">OTHER</label>
              </div>
            </span>
          </fieldset>
        </InputDiv>

        <InputDiv>
          <label>
            JOB LOCATION
            <select value={inputs.location || ""} onChange={handleChange} class="textFieldBox">
              <option value="NY">New York</option>
              <option value="SF">San Francisco</option>
              <option value="P">Paris</option>
              <option value="T">Tokio</option>
            </select>
          </label>
        </InputDiv>

        <InputDiv>
          <label>
            JOB LEVEL
            <input
              type="text"
              name="level"
              value={inputs.level || ""}
              onChange={handleChange}
              placeholder="Entry"
              class="textFieldBox"
            />
          </label>
        </InputDiv>

        <input type="submit" />
      </form>
    </FormDiv>
  );
};

export default Form;
