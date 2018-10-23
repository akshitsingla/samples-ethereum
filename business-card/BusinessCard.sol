pragma solidity ^0.4.0;
contract BusinessCard {
    
    bytes32 name;
    bytes32 email;
    
    address owner;
    address[] accessList;
    
    // constructor to initialize the name & email
    constructor (bytes32 _name, bytes32 _email) public {
        name = _name;
        email = _email;
        owner = msg.sender;
    }
    
    // function to allow access to particular address (restricted to owner)
    function allowAccess(address _allowedAddress) private {
        require(isOwner(msg.sender));
        accessList.push(_allowedAddress);
    }
    
    // function to update email (restricted to owner)
    function updateEmail(bytes32 _email) private {
        require(isOwner(msg.sender));
        email = _email;
    }
    
    // function to view email (restricted to accessList + owner)
    function getEmail() view public returns (bytes32) {
        require(isOwner(msg.sender) || isAllowed(msg.sender));
        return email;
    }
    
    // validation functions
    function isOwner(address _sender) view public returns (bool) {
        if (_sender == owner)
            return true;
        return false;
    }
    function isAllowed(address _sender) view public returns (bool){
        for (uint i = 0; i< accessList.length; i++) {
            if (_sender == accessList[i])
                return true;
        }
        return false;
    }
}