# bert-tokenizer
A simple tool to generate bert tokens and input features

## Installation
```npm install bert-tokenizer```

## Usage

```
const {BertTokenizer} = require('bert-tokenizer');

const text = "i like strawberries";
const tokenIds = [ 1045, 2066, 13137, 20968 ];
const vocabUrl = 'node_modules/bert-tokenizer/assets/vocab.json'

const bertTokenizer = new BertTokenizer(vocabUrl, true);
console.log(bertTokenizer.tokenize(text));
//[ 1045, 2066, 13137, 20968 ]
console.log(bertTokenizer.convertIdsToTokens(tokenIds));
//[ '▁i', '▁like', '▁straw', 'berries' ]
console.log(bertTokenizer.convertSingleExample(text));
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
## Development

To modified the code, first clone the repo and
install the dependencies.
```
git clone https://github.com/tedhtchang/bert-tokenizer.git
cd bert-tokenizer
npm install
```
To make a change, edit the source code under `src` folder and save.
Next compile the source code.
```
npm run build
```

Run test cases to make sure you did not break any thing:
```
npm run test
```

To test your package, run npm install with the full path to
your package directory:
```
npm install local-path-to-bert-tokenizer-folder
```
