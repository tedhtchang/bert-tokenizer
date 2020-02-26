const BertTokenizer = require('bert-tokenizer');
const posText = "i like strawberries";
const posTokenids = [ 1045, 2066, 13137, 20968 ];
const vocabUrl = 'node_modules/bert-tokenizer/assets/vocab.json'
const bertTokenizer = new BertTokenizer(vocabUrl, true);
console.log(bertTokenizer.tokenize(posText));
console.log(bertTokenizer.convertIdsToTokens(posTokenids));
console.log(bertTokenizer.convertSingleExample(posText));
