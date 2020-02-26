/* globals jasmine, describe, it, expect, tf */
import BertTokenizer from '../src/index';

const posText = "i like strawberries";
const posTokenids = [ 1045, 2066, 13137, 20968 ];
const posTokens = ['▁i', '▁like', '▁straw', 'berries'];
const vocabUrl = './assets/vocab.json'

let tokenizer: BertTokenizer;
beforeAll(  () => {
  tokenizer = new BertTokenizer(vocabUrl, true);
});

describe('Bert Tokenizer', () => {
  it('tokenize returns correct the coresponding token ids', () => {
    const res =  tokenizer.tokenize(posText);
    expect(res).toEqual(posTokenids);
  });

  it('convertIdsToTokens convert ids to tokens', () => {
    const res = tokenizer.convertIdsToTokens(posTokenids);
    expect(res).toEqual(posTokens);
  });

  it('convertTokensToIds convert tokens to ids', () => {
    const res = tokenizer.convertTokensToId("i like strawberries");
    expect(res).toEqual(posTokenids);
  });
});
