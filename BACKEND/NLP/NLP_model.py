import re

class MedicalBot:
    def __init__(self):
        self.step = 0
        self.user_data = {}

    def message_probability(self, user_message, recognised_words, single_response=False, required_words=[]):
        message_certainty = 0
        has_required_words = True

        for word in user_message:
            if word in recognised_words:
                message_certainty += 1

        percentage = float(message_certainty) / float(len(recognised_words))

        for word in required_words:
            if word not in user_message:
                has_required_words = False
                break

        if has_required_words or single_response:
            return int(percentage * 100)
        else:
            return 0

    def check_all_messages(self, message):
        highest_prob_list = {}

        def response(bot_response, list_of_words, single_response=False, required_words=[]):
            nonlocal highest_prob_list
            highest_prob_list[bot_response] = self.message_probability(message, list_of_words, single_response, required_words)

        response('Hello! Can I have your name, please?', ['hello', 'hi', 'hey', 'sup', 'heyo'], single_response=True)
        response('See you!', ['bye', 'goodbye'], single_response=True)
        response('I\'m doing fine, and you?', ['how', 'are', 'you', 'doing'], required_words=['how'])
        response('You\'re welcome!', ['thank', 'thanks'], single_response=True)
        response('Thank you!', ['i', 'love', 'code', 'palace'], required_words=['code', 'palace'])

        best_match = max(highest_prob_list, key=highest_prob_list.get)

        return best_match

    def get_response(self, user_input=''):
        split_message = re.split(r'\s+|[,;?!.-]\s*', user_input.lower())
        if self.step == 0:
            self.step += 1
            return 'Hello! Can I have your name, please?'
        elif self.step == 1:
            self.user_data['name'] = user_input
            self.step += 1
            return 'Thank you. Can I know your age, please?'
        elif self.step == 2:
            self.user_data['age'] = user_input
            self.step += 1
            return 'Thank you. Can I know your blood group, please?'
        elif self.step == 3:
            self.user_data['blood_group'] = user_input
            self.step += 1
            return 'Thank you. Can I have your email, please?'
        elif self.step == 4:
            self.user_data['email'] = user_input
            self.step += 1
            return 'Thank you. Can I have your phone number, please?'
        elif self.step == 5:
            self.user_data['phone'] = user_input
            self.step += 1
            return 'Thank you for providing all the information. How can I assist you further?'
        else:
            return self.check_all_messages(split_message)

bot = MedicalBot()

while True:
    print('Bot: ' + bot.get_response(input('You: ')))
