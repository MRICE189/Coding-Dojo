list = [9,7,5,3,2,1,6,8,4]

def insertion_sort(arr):
    for i in range(1, len(arr)):
        key = arr[i]
        j = (i-1)
        #compare the key with each element to the left of it until a smaller element is found
        while j >= 0 and key < arr[j]:
            arr[j+1] = arr[j]
            j-=1
        arr[j+1] = key
    print(arr)

insertion_sort(list)