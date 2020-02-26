# bert-tokenizer
A simple tool to generate bert tokens and input features

## Installation
```npm install bert-tokenizer```

## Usage

```
const BertTokenizer = require('bert-tokenizer');

const posText = "i like strawberries";
const posTokenids = [ 1045, 2066, 13137, 20968 ];
const vocabUrl = 'node_modules/bert-tokenizer/assets/vocab.json'

const bertTokenizer = new BertTokenizer(vocabUrl, true);
console.log(bertTokenizer.tokenize(posText));
//[ 1045, 2066, 13137, 20968 ]
console.log(bertTokenizer.convertIdsToTokens(posTokenids));
//[ '▁i', '▁like', '▁straw', 'berries' ]
console.log(bertTokenizer.convertSingleExample(posText));
//[ '[CLS]', '▁i', '▁like', '▁straw', 'berries', '[SEP]' ]
{
  inputIds: [
    101, 1045, 2066, 13137, 20968, 102, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,    0,    0,     0,     0,   0, 0, 0, 0, 0, 0,
      0,
    ... 28 more items
  ],
  segmentIds: [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
    ... 28 more items
  ],
  inputMask: [
    1, 1, 1, 1, 1, 1, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0,
    ... 28 more items
  ]
}
```


