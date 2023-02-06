# marinelifeirony
https://marinelifeirony.tistory.com/

# 블로그용 소스 작성 레포
여러 라이브러리, 알고리즘, 소스 리뷰 & 재작성 위주로 천천히 해나갈것

![블로그를 해나갈때 마음가짐..](/images/agilecar.png)

처음부터 완벽한 포스팅을 하려 하지 말자.

부족한것 부족했던걸 채워 나갈 수 있도록 하자.

소스는 되도록 복사가 아닌 직접 작성하도록 하자.


# 자주 쓰는 깃헙 명령어 정리
## 원본유지 & 파일추적 중지
```
git update-index --skip-worktree file1
// 위 건 영구히 추적하지 않음.
// 아래 건 변화있으면 풀림.
git update-index --assume-unchanged file1
```

## 추적 다시하기
```
git update-index --no-skip-worktree FILE1

git update-index --no-assume-unchanged FILE1
```