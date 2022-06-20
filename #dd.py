#dd
w = 20
h = 0
cf_num = []

for i in range(1,min(w,h)): #두 최대공약수 구하는 반복문
    if w%i==0 | h%i==0:
        cf_num = i


print(cf_num)


def threshold(x,y):
    if x <= 1 :
        return 0
    elif y <=1 :
        return 0
    else:
        return (x - 1)*(y - 1)

def threshold_1(x,y):
    if x <= 1 or y <= 1 :
        return 0
    else :
        return (x-1)*(y-1)

print(threshold(w,h), threshold_1(w,h))

#소수 구하는 코드//심심해서 만들어봄.
prime_number = []

for i in range(30000,30100):
    for j in range(2,i+1):
        if i%j == 0:
            break
        elif i-1 == j: prime_number.append(i)

print(prime_number)