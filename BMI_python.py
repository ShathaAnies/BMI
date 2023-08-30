def calculate_BMI(h,w):
    bmi= w/(h*h)
    return bmi


def interprete_BMI(BMI):
    if BMI<18.5:
        print("You are Undeweight")
    elif BMI>=18.5 and BMI<25:
        print("You are Normal weight")  
    elif BMI>=25:
        print("You are Overweight")
    else:
        print("Please chick the number again")


Hight =input("Please enter your Hight: ")
Weight =input("Please enter your Weight: ")
h=int(Hight)
w=int(Weight)
Bmi=calculate_BMI(h,w)
interprete_BMI(Bmi)