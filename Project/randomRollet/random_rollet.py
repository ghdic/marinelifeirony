import random
import json
import time
import os


class RandomRollet:
    def __init__(self, quiz_type="sort"):
        with open('user.json', 'r') as f:
            self.user = json.load(f)['user']

        with open('quiz.json', 'r') as f:
            self.quiz = json.load(f)['quiz'][quiz_type]

    def shuffle_quiz(self):
        if len(self.quiz) == 0:
            print("질문이 더이상 존재하지 않습니다.")
            return "질문이 더이상 존재하지 않습니다 ctrl + c를 눌러 JOY를 표하세요"
        shuffle_num = random.randint(10, 20)
        for i in range(shuffle_num):
            os.system('clear')
            target_index = random.randint(0, len(self.quiz) - 1)
            target_quiz = self.quiz[target_index]
            print(f'질문: {target_quiz}')
            time.sleep(0.1)
        del self.quiz[target_index]
        print(len(self.quiz))
        return target_quiz

    def shuffle_user(self, target_quiz):
        shuffle_num = random.randint(10, 20)
        for i in range(shuffle_num):
            os.system('clear')
            target_user = random.randint(0, len(self.user) - 1)
            print(f'질문: {target_quiz}\n발표자: {self.user[target_user]}')
            time.sleep(0.1)


if __name__ == '__main__':
    while True:
        randomRollet = RandomRollet(quiz_type="algorithm")
        while True:
            quiz = randomRollet.shuffle_quiz()
            event = input("")  # waiting..
            if event != 'r':
                break

        while True:
            randomRollet.shuffle_user(quiz)
            event = input("")
            if event != 'r':
                break

