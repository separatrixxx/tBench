import smtplib
class STMP_server:
    def __init__(self):
        self.server = smtplib.SMTP_SSL('smtp.mail.ru:465')
        self.server.login('tbenchtest@mail.ru', 'NmmxfeDFjvPm0TksT2c9')

    def send_email(self,email:str,code:str):
        self.server.sendmail("tbenchtest@mail.ru", email, code)
        self.server.quit()




