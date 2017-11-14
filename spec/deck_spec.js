var deck = require("../server/game.logic/deck.js")

describe("Deck functionality Testing", function() {
  describe("Shuffle deck /", function() {
    it("returns a random ordered deck with the same length", function() {
      var dummyDeck = [1,2,3,4,5,6]
      expect(dummyDeck.length).toBe(deck.shuffle(dummyDeck).length)
    });
  });
  describe("Parse habilities",function(){
    it("returns the range set to 2",function(){
      var habilities = "Range:2; Gigant"
      expect(deck.parseHabilities(habilities).range).toBe(2);
    })
  })
});


describe("Check if the cards drawn has been parsed", function() {

  beforeEach(function() {
    spyOn(deck, 'parseHabilities');
    var dummyDeck = {cards:[{habilities:"Range:2; Gigant"}],hand:[]}
    deck.draw(1,dummyDeck);
  });

  it("tracks that the spy was called", function() {
    expect(deck.parseHabilities).toHaveBeenCalled();
  });

});
