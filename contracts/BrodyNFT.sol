// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.4;

import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
import '@openzeppelin/contracts/access/Ownable.sol';

contract BrodyNFT is ERC721, Ownable {
    uint public mintPrice;
    uint public totalSupply;
    uint public maxSupply;
    uint public maxPerWallet;
    bool public isPublicMintEnabled;
    string internal baseTokenUri;
    address payable public withdrawWallet;
    mapping(address => uint) public walletMints;

    constructor() payable ERC721('CybroPunks', 'BRO') {
        mintPrice = 0.05 ether;
        totalSupply = 0;
        maxSupply = 1000;
        maxPerWallet = 3;
        //set withdraw wallet address
    }

    function setIsPublicMintEnabled(bool _isPublicMintEnabled) external onlyOwner {
        isPublicMintEnabled = _isPublicMintEnabled;
    }

    function setBaseTokenUri(string calldata _baseTokenUri) external onlyOwner {
        baseTokenUri = _baseTokenUri;
    }

    function tokenURI(uint _tokenId) public view override returns (string memory) {
        require(_exists(_tokenId), 'Token does not exist.');
        return string(abi.encodePacked(baseTokenUri, Strings.toString(_tokenId), ".json"));
    }

    function withdraw() external onlyOwner {
        (bool success, ) = withdrawWallet.call{ value:address(this).balance }('');
        require(success, 'Withdraw Failed');
    }

    function mint(uint _quantity) public payable {
        require(isPublicMintEnabled, 'Minting is not enabled.');
        require(msg.value == _quantity * mintPrice, 'Incorrect Mint Value');
        require(totalSupply + _quantity <= maxSupply, 'Sold Out');
        require(walletMints[msg.sender] + _quantity <= maxPerWallet, 'Exceeded Max Limit');

        for (uint i = 0; i < _quantity; i++) {
            uint newTokenId = totalSupply + 1;
            totalSupply++;
            _safeMint(msg.sender, newTokenId);
        }
    }
}

