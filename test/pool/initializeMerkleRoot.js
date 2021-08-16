const initializeMerkleRoot =
  '0xf42fe3b48cc5e9bff7e2777cfe4981a28b5b3c7cd604e6abeb3e7bc46efdad4a';

const initializeData = [
  {
    publicKey:
      '0xb96969dea0a510be05f2abb406344e4576b9597fe29053a8ecdb2ab0cbb4b991859f297f43d7e0e9ab1f909466190544',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x54d3673931628f06f64ca1bdc20b88338097d42bbec1032a4085ecf2cc6bbe4a',
    signature:
      '0x8933a4b8ce2e563e8f1ee335edde2c7d706f234363874939fc536bc144471a450c4da4f0e4e13edeb16c9cb739776ae7012ec4bfd265fd37a0bfaf3e45eec8bfcce873fc0e0ee22593dee4a4fa66f67bd75b4a59b3f458419c5deae8d68ff787',
    merkleProof: [
      '0x0d50f81c690ec6ce2195c0fd17e7b12bcc193d08dfaeb290902c49baf260c7e0',
      '0x71edb70330fe30fd386d48bddd88b92b5e1ca23a4638e227624777cfe943da18',
      '0x409236559f2addf924723f13fdf3e6867ef4e5c87bf11896a159ca0c2b9ecccc',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0x82a1c1e8fefa9b330d8720e2f7ae2946b6c222d5a386dc07edc6e45e950fb697d20f0d082290a0401c409d312582f19a',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x02d3e148895dc7ccfe7607532f37a24ff517315d44e4a75b50544455e029f547',
    signature:
      '0x8562de4ea7ae13f4ab31a70a3b57a9fe48b948807ab054118442899f28190e7a680cfb5755e9dca19d7c46ddd2e94c8e0fd3dd083c83b8cf7d56a3293ce01d56fa97cac7d6a309e1aa55e18c2cfc2138917f34bc47493b40c92ffd6630544307',
    merkleProof: [
      '0xbd484d0623ae33a4513d34f02bbe1b195d928955cc6e42bd53d9b7bcee3c11be',
      '0x8488179b936bfc7270a95b441ff36cf5ebb237ed814f1b67f367d6f9e26dbc06',
      '0x307b1d09a6f5d0639a787fcf3f7b3d311f15ccaf20d4d255f2a3569abed4faa3',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0xb9e286101e44fb424047d332a5f81120310fa67e39d5c647156eebdf0fe07b4d1f6a5aafc4f40e8b707a8ef727469bc3',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0xf53b8cda810a665de32068bd503d061c04d6f5c3cb79aaa692062b9406d96c53',
    signature:
      '0xace5fa8291b94149b7141adc65952ca56196e2c43ff347c093d4cd02e4f1af0b7ca71f7fd5708d317cda0c7cba4a0e19112efcb768ab35af2e5fc0035feae62e7bd0b66cb9b3895f8659cf4f79b3a9f680872d6ca2ea3dd36730369fb1ad1a8a',
    merkleProof: [
      '0xdbc7634a30af542e808ba9d255aa9314e3ff8ba9e6c54bf1a896ce02c3fd518f',
      '0xf9d82b6415020d5762a00be524008b3eec1d230cf1e72a03dc416acc2f4fee70',
    ],
  },
  {
    publicKey:
      '0x87b54d1fbe23dba1dbbfe5236569b13a6e9e852e2620fc846625360a7f3f8a96c6763f8f73db2ccc21e76591a87f838e',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x159e9eca1c7e72c33d7a2361cdadd3ac4ec2a4befa64492b332c2b7fca40458f',
    signature:
      '0xa5707105530a461c1632ef7a7847d8262cd4f26ad603e267825a998c448ac393a48fab406a1b8bab07a0dce021c273a305d0328b17bdc853111baad5112977a3e95a2f91fb7d1b143fa0022e07e62da9e7175abea68b15a211de1c8db5d1cc75',
    merkleProof: [
      '0x07a08a7e18fe8e7f284f8270b6c3ae1f780d8643d312fda3b92ed62fb8e9a3d0',
      '0xbfa04224f38f3f07c150ed0eb056d7d612d081e46954a3adf591039667abbaa1',
      '0x409236559f2addf924723f13fdf3e6867ef4e5c87bf11896a159ca0c2b9ecccc',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0x8e44d45b2656a4a84b788866bbbf8274c12f52a36d47c1fc03f9988b11fe11a8cd4e03be207106feeee135b7b6c66aad',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0xa3bb4549fee8c577f121d17dcbab52fbaaa7342a8d7861575973c05408f9561d',
    signature:
      '0x9056037a087cf28892996e3e33b73f5554a6bcfc6688a79eb23aba93691d12dfe76e0cd6ca867f10adaba1d9f1539c73175829f8746141e864875e27bba37950f179075421112f33334c0bff8b3c64daf05bb2ffe60f9fb53a65f934c3889328',
    merkleProof: [
      '0x124a3ce13fbc9d422794b234ff30a854b32a3d175ba4910aa57916a88791df39',
      '0x71edb70330fe30fd386d48bddd88b92b5e1ca23a4638e227624777cfe943da18',
      '0x409236559f2addf924723f13fdf3e6867ef4e5c87bf11896a159ca0c2b9ecccc',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0xafbcd1d40bd1f265342f23d4db678807959e8c4b3575ba479693265b33c3083bfd62cb5ecdf88d54e59d330f3dc5fb01',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x30dba0d02692edc331c52bf221c81ce183f2750460a98ecfd4f50e9fecdaf82d',
    signature:
      '0x96f286db9a99b443aa7beb409a0896e3c4b724e9500970d6ffe3a1313c585c48a1fe4971a2b0aa849cb1a697acea137c080e4f7c4e488209061e44a0605f2448561ebb3c0f5d0c4c12873105e1a73c9fe550c2473a5085e1c0e96ed11b6430e3',
    merkleProof: [
      '0x0989582502b4c9f40a0ca6e8006480a95dbdeb6da9668c3b0ae122b9f886d131',
      '0xbfa04224f38f3f07c150ed0eb056d7d612d081e46954a3adf591039667abbaa1',
      '0x409236559f2addf924723f13fdf3e6867ef4e5c87bf11896a159ca0c2b9ecccc',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0xa3f82c068ca69cb9696f3b99eed131884c9f6bd9eb6b395c9a7c187d83627e7f859cecb60f8ee7c5789bcea7e557a853',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x62596a996f3e157131067db8e894689981059db15f441da0bd3348bf9c95700c',
    signature:
      '0x83e34d4907ac0e83a37492a943be7bca1cacbfb5801e51c67caddfffa2dc6ffb26337fc905bab9ee40365561d4531849036d01cf4ed4733f125b3ed56fe9335ef5d5ce5b0ae58bdb209231519f464891e359f8152ce98f1dbc5f98a3524488f9',
    merkleProof: [
      '0xdf9a7186d319700dcf564b4f9ca1006b815d4bd03f096b61c042f6f65740f91c',
      '0xf9d82b6415020d5762a00be524008b3eec1d230cf1e72a03dc416acc2f4fee70',
    ],
  },
  {
    publicKey:
      '0x94b00c20f4c00bd754502b3436e4e9e6da0d81edaede9da04112cbed90beb554a31c94e3157875fb64dc1e0dbefb9ce2',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x6f89a72c64b998bc89bddd29f1d50a05b43a674b1084fdc2ca3f3f9f622497ce',
    signature:
      '0x904eead56c2fb5e9023e62759bacafef0869ba906978e3084fb3ad7c09073bbc3ddcd249f1eaad2b83d1f2fc3ca3af450d28f6f63405eb4b93336bbf5b883bba0c14f0a7d2e5aa18c9bd856d71bc590412be51bc38f53762ad741e3273404ded',
    merkleProof: [
      '0x4205d651e6b9494b709014f5bc720d544161086418cd588cc9c7f3b76e1900de',
      '0xb963f6a68457b6d5c8a8faa228b9d812e8429907a50f2cd2fbf5b68875a37379',
      '0x307b1d09a6f5d0639a787fcf3f7b3d311f15ccaf20d4d255f2a3569abed4faa3',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0x85ff74a6384eb7852c3c4b855053e25bbb75e90897a474382cbc6568574c2393ec0995a059d82f22db6dd711ee6d2556',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0xb0ec80ea15586a41427fae095729b1750fd53affcd5987b52f5b8a798946243a',
    signature:
      '0x9996c3aea1cd7a63fe932164b823e90a1ca43b7627e123df2a9f07cdb82bb60796b579b21be8d99ba95323a93025270b17c18257c07b66caddd0835b8af674ce161c045d98974469bcca31aebcdcdf466427d51d3da75156a74a44b80e31f12a',
    merkleProof: [
      '0x44de26ad0dabfcdd46d6716780bb1a44b04b0e9af5a5fcec567e14cb917171c5',
      '0xb963f6a68457b6d5c8a8faa228b9d812e8429907a50f2cd2fbf5b68875a37379',
      '0x307b1d09a6f5d0639a787fcf3f7b3d311f15ccaf20d4d255f2a3569abed4faa3',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
  {
    publicKey:
      '0xa101956aa020ce896aa606b8dff7a91e0ec2429cdf2b62db8230612ecb7058bd733a644f8a607b6f050e179e4a881ff1',
    withdrawalCredentials:
      '0x0100000000000000000000002296e122c1a20fca3cac3371357bdad3be0df079',
    depositDataRoot:
      '0x1a850e672c25d06eb7535ef910d3dd70e9f8262f512685c2f76241e1883a500f',
    signature:
      '0xa2b3fdf97a9a0171a5869289d6b4d62006d754148234dbccf1ecb75e2db01f38933b9e9bec315a3a08f0af476edec75a0d6b9ef7a6979e0f4244f7e0af3d97f013603f920c59b15232e22fe9867da53b4473e7c4c7616de665075d5d9becb003',
    merkleProof: [
      '0xa46d6a464ae9cd95edaae1ed5b0aaa9b23f24d43a2aa4e6ea94882fb6bfb15cf',
      '0x8488179b936bfc7270a95b441ff36cf5ebb237ed814f1b67f367d6f9e26dbc06',
      '0x307b1d09a6f5d0639a787fcf3f7b3d311f15ccaf20d4d255f2a3569abed4faa3',
      '0x7d6711df91f76ae4361bb1e7b90070ed43b026418cdd9e73adc651a91ec040a1',
    ],
  },
];

module.exports = {
  initializeData,
  initializeMerkleRoot,
};
