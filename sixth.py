def calc_fact(n):
    fact = 1
    for i in range(1, n+1):
        fact *= i
    print(fact)



calc_fact(5)


def count_vowels(text):
    count = 0

    for char in text.lower():
        if char in "aeiou":
            count += 1

    return count

print(count_vowels("Hello World"))
print(count_vowels("Python"))
print(count_vowels("Education"))
print(count_vowels("AEIOU"))




def reverse_string(text):
    return text[::-1]

print(reverse_string("muhammad abis sultan"))


def list_sum(numbers):
    total = 0

    for num in numbers:
        total += num

    return total

print(list_sum([1, 2, 3, 4, 5]))






def multiply(n):
    for i in range(11):
         n *= i
    return



print(multiply(3))



def is_prime(n):
    if n < 2:
        return False

    for i in range(2, n):
        if n % i == 0:
            return False

    return True

print(is_prime(7))
print(is_prime(8))