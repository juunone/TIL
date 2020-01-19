## Github-action

깃헙액션을 사용한 경험에 대해 작성해보고자 한다.  
일단 `aws amplify` 로 기존에 프론트를 배포하고있었다.  
amplify CLI를 통해서 수동배포를 하고있었는데 이 부분을
깃헙액션을 통해 CI/CD 를 구축해보고자 한다.

[amplify-cli-action](https://github.com/marketplace/actions/amplify-cli-action) 이라는
깃헙 액션 워크플로우 템플릿을 base로 yml을 작성했다.

깃헙액션 탭에 들어가면 기본적으로 많이쓰이는 템플릿을 제공하는데 그외에도 [github-action marketplace](https://github.com/marketplace/actions/) 에 가면 유저들이 만들어 놓은 많은 템플릿도 제공하고있다. 이중 자신이 필요한 CI/CD 베이스를 가져와 사용할 수 있다.

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

## 참조

- [github-action docs](https://help.github.com/en/actions/automating-your-workflow-with-github-actions/workflow-syntax-for-github-actions)
- [github-action market](https://github.com/marketplace?type=actions)
- [blog.aliencube.org](https://blog.aliencube.org/ko/2019/12/13/publishing-static-website-to-azure-blob-storage-via-github-actions/?fbclid=IwAR3WYkF5_oSs0tYoMRiVIbTmk9bNl4wu-a3Cn8sfPtP6l-IYIPvYEzHj5-Y)