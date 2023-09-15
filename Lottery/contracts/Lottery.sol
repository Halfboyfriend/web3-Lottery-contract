// SPDX-License-Identifier: GPL-3.0

pragma solidity >=0.8.0;

contract Lottery {
    address public manager;
    address[] public player;

    constructor(){
        manager = msg.sender;
    }

    function enter() public payable {
        require(msg.value > .01 ether);
        player.push(msg.sender);
    }

    function random() private view returns (uint256) {
       return uint256(keccak256(abi.encodePacked(block.number, block.timestamp, player)));
    }

    function pickWinner() public restricted {
        uint256 index = random() % player.length;
        address winner = player[index];
        uint256 contractBalance = address(this).balance;
        require(contractBalance > 0, "No balance in the contract");
        player = new address[](0); // Reset the players array after picking the winner
        payable(winner).transfer(contractBalance);
    }

    modifier restricted() {
        require(msg.sender == manager, "Your are not the manager");
        _;
    }

    function getAllPlayers () public view returns (address[] memory){
        return player;
    }

}