// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.7.0 <0.9.0;

contract Sharpid {

  mapping (address => string) message;

  struct personal{
      string dob;
      string blood_group;
      uint256 phone_number;
      string fathers_name;
      string mothers_name;
  }
  struct college{
      uint256 valid_through;
      string dept;
      string board;
  }
  struct id {
      string name;
      uint256 regno; 
      personal p;
      college c;
  }

    mapping (address => id) ids;

  function sendMessage(address _recipient , string memory _message) public {
    message[_recipient] = _message;
  }

  function readMessage() public view returns(string memory){
      return message[msg.sender];
  }

  function issueID(string memory name,uint256 regno,string memory dob,string memory blood_group,uint256 phone_number,
        string memory fathers_name,string memory mothers_name,uint256 valid_through,
        string memory dept, string memory board,address addr) public{
            id memory _id;
            _id.name = name;
            _id.regno = regno;
            personal memory _personal = _id.p;
            _personal.dob = dob;
            _personal.blood_group = blood_group;
            _personal.phone_number = phone_number;
            _personal.fathers_name = fathers_name;
            _personal.mothers_name = mothers_name;
            college memory _college = _id.c;
            _college.valid_through = valid_through;
            _college.dept = dept;
            _college.board = board;
            ids[addr] = _id;
  }

  function viewID() public view returns(id memory) {
      return ids[msg.sender];
  }
  
}