// UI Updates
var setAccountsDropdown = function(_accounts) {
    let _options = "";
    for (let i=0; i<_accounts.length; i++)
        _options += "<option>" + _accounts[i] + "</option>";
    $("#accounts_dropdown").html(_options);
}
var updateDeployedContractsList = function(_contracts) {
    let _items = "";
    for (let i=0; i<_contracts.length; i++)
        _items += "<li>" + _contracts[i] + "</li>";
    $("#deployed_contracts_list").html(_items);
}
var updateStatusMsg = function(_status) {
    $("$status_paragraph").html(_status);
}

// Triggers
var updateEmail = function() {
    let _smart_contract_textbox = $("#new_email_textbox").val();
    console.log('web3 to invoke contract');
    console.log('updateStatusMsg()');
}
var getEmailAddress = function() {
    let _smart_contract_textbox = $("#smart_contract_2_textbox").val();
    console.log('web3 to invoke contract');
    console.log('updateStatusMsg()');
}
var allowAccess = function() {
    let _smart_contract_textbox = $("#smart_contract_textbox").val();
    let _new_address_textbox = $("#new_address_textbox").val();
    console.log('web3 to invoke contract');
    console.log('updateStatusMsg()');
}
var deployContract = function() {
    let _name = $("#name_textbox").val();
    let _email = $("#email_textbox").val();
    console.log('web3 to deploy contract');
    console.log('deployed_contracts.push()');
    console.log('updateStatusMsg()');
    updateDeployedContractsList(window.deployed_contracts);    
}
$(document).ready(function() {
    setAccountsDropdown(window.accounts);
});