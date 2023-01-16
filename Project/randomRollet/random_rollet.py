import random
import json
import time
import os

quiz_type = "data_structure"

with open('user.json', 'r') as f:
    user = json.load(f)['user']

with open('quiz.json', 'r') as f:
    quiz = json.load(f)['quiz'][quiz_type]


shuffle_num = random.randint(10, 20)
for i in range(shuffle_num):
    os.system('clear')
    target_quiz = random.randint(0, len(quiz) - 1)
    print(f'질문: {quiz[target_quiz]}')
    time.sleep(0.2)

input("")  # waiting..

shuffle_num = random.randint(10, 20)
for i in range(shuffle_num):
    os.system('clear')
    target_user = random.randint(0, len(user) - 1)
    print(f'질문: {quiz[target_quiz]}\n발표자: {user[target_user]}')
    time.sleep(0.2)
