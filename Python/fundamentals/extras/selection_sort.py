list = [9,7,5,3,2,1,6,8,4]

def selection_sort(arr):
    for j in range(len(arr)):
        for i in range((0+j),len(arr)):
            lowest = arr[(0+j)]
            if arr[i] < lowest:
                arr[i], arr[(0+j)] = lowest, arr[i]
    print(arr)

selection_sort(list)