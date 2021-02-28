#!/usr/bin/env python3

# Generates Kraepelin psychologic test 

from random import randrange

class Kraepelin:

    def __init__(self, row_num_len, num_of_rows):
        self.ROW_NUM_LEN = row_num_len
        self.NUM_OF_ROWS = num_of_rows 
        self.kraepelin = self.generate()
        self.formated_kraepelin = self.format()
        self.responses = self.generate_responses(self.kraepelin)
        self.formated_responses = self.format_responses(self.responses)

    def generate(self):
        kraepelin = []
        for _ in range(self.NUM_OF_ROWS):
            row = []
            for j in range(self.ROW_NUM_LEN):
                prev_num = row[j-1] if 0 < j else randrange(1,9) 
                next_num = randrange(1,9) 
                while next_num == prev_num: 
                    next_num = randrange(1,9)
                row.append(next_num)
            kraepelin.append(row) 
        return kraepelin

    def format(self):
        formated_kraepelin = []
        for row_i, row in enumerate(self.kraepelin):
            formated_kraepelin.append('   ')
            for pos in range(len(row)):
                num = row[pos]
                formated_kraepelin.append('%d  ' % num)
            formated_kraepelin.append('\n')
            formated_kraepelin.append('%02d:'%(row_i+1))
            formated_kraepelin.append('|__'*self.ROW_NUM_LEN)
            formated_kraepelin.append('\n')
        return ''.join(formated_kraepelin)

    def generate_responses(self, kraepelin_test):
        responses = []
        for row in kraepelin_test:
            response_row = []
            curr_i = 0
            next_i = 1
            while next_i < len(row):
                curr_num = row[curr_i]
                next_num = row[next_i]
                diff = curr_num - next_num
                sum = curr_num + next_num
                if diff < 0:
                    response_row.append(sum)
                else:
                    response_row.append(diff)
                curr_i += 1
                next_i = curr_i + 1
            responses.append(response_row)
            response_row = []
        return responses
    
    def format_responses(self, responses):
        formated_responses = []
        for row_i, row in enumerate(self.kraepelin):
            formated_responses.append('   ')
            for pos in range(len(row)):
                num = row[pos]
                formated_responses.append('%d  ' % num)
            formated_responses.append('\n')
            formated_responses.append('%02d:'%(row_i+1))
            for res in responses[row_i]:
                response = '|_%d'%res if res<10 else '|%d'%res
                formated_responses.append(response) 
            formated_responses.append('\n')
        return ''.join(formated_responses)
        
    def save(self): 
        with open('kraepelin%s.txt'%''.join([str(n) for n in self.kraepelin[0]]), 'w') as f:
            f.writelines(self.formated_kraepelin)
        with open('kraepelin%s.responsese.txt'%''.join([str(n) for n in self.kraepelin[0]]), 'w') as f:
            f.writelines(self.formated_responses)

kraepelin = Kraepelin(22, 22)
print(kraepelin.formated_kraepelin)
print(kraepelin.formated_responses)
# kraepelin.save()



