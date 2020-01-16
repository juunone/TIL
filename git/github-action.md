## Github-action

깃헙액션을 사용한 경험에 대해 작성해보고자 한다.
일단 `aws amplify` 로 기존에 프론트를 배포하고있었다.
amplify CLI를 통해서 수동배포를 하고있었는데 이 부분을
깃헙액션을 통해 CI/CD 를 구축해보고자 한다.

```yaml
name: 'Amplify Deploy'
on:
  push:
    branches:
      - github-action-deploy

jobs:
  test:
    name: test amplify-cli-action
    runs-on: ubuntu-latest

    strategy:
      matrix:
        node-version: [12.x]

    steps:
    - uses: actions/checkout@v1
    - name: use node.js ${{ matrix.node-version }}
      uses: actions/setup-node@v1
      with:
        node-version: ${{ matrix.node-version }}

    - name: configure amplify
      uses: ambientlight/amplify-cli-action@0.2.0
      with:
        amplify_command: configure
        amplify_env: rnd
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: ap-northeast-2

    - name: install, build and test
      run: |
        npm install
        npm rebuild node-sass
        # build and test
        # npm run build
        # npm run test
    
    - name: deploy
      uses: ambientlight/amplify-cli-action@0.2.0
      with:
        build_command: 'npm run build'
        amplify_command: publish
        amplify_env: rnd
      env:
        AWS_ACCESS_KEY_ID: ${{ secrets.AWS_ACCESS_KEY_ID }}
        AWS_SECRET_ACCESS_KEY: ${{ secrets.AWS_SECRET_ACCESS_KEY }}
        AWS_REGION: ap-northeast-2
```