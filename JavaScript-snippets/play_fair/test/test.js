const encipher = require('../play_fair_cipher').default;
// Since Node 10, we're using Mocha.
// You can use `chai` for assertions.
const chai = require("chai");
const assert = chai.assert;
// Uncomment the following line to disable truncating failure messages for deep equals, do:
// chai.config.truncateThreshold = 0;
// Since Node 12, we no longer include assertions from our deprecated custom test framework by default.
// Uncomment the following to use the old assertions:
// const Test = require("@codewars/test-compat");

describe("Solution", function() {
  it("should encipher correctly using 'playfair jexample' as key", function() {
    plaintexts =  ['Jackdaws love my big sphinx of quartz',
      'Pack my box with five dozen liquor jugs',
      'The quick onyx goblin jumps over the lazy dwarf',
      'Cwm fjord bank glyphs vext quiz',
      'How razorback jumping frogs can level six piqued gymnasts',
      'Cozy lummox gives smart squid who asks for job pen'];
    ciphers = ['EPBNOEZQ ANAD XF KBH QFBRKE QY SVLIUWM',
      'LYBN XF DKG YBPS METD OSVRO PRNWNE RTHQ',
      'ZBX OTRBN QOXG DQCPRK RTIFK QADI UDM AYWF GVLEYM',
      'GUH MEKEC DPON CYFLSZ ADIW NWMT',
      'DSU XFVNEDPBN RTIFRKH YENHQ DLU RDARA KMI YXKVRG HFXOLKZQM',
      'DNWF RLIMES GQETM OMQEF IUKST RGV DSFO NKA SER KDAIQR'];
    key = 'playfair jexample';
    for(let i=0;i<plaintexts.length;i++) {
      assert.strictEqual(encipher(plaintexts[i], key), ciphers[i]);
    }
  });
});