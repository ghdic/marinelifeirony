enum Status { approved, pending, rejected }

void main() {
  Status status = Status.pending;

  if (status == Status.approved) {
    print('승인입니다');
  } else if (status == Status.pending) {
    print("대기입니다");
  } else {
    print('거절입니다');
  }

  print(Status.pending == 'pending');
}
