def two_sum(nums, target)
    # loop through to check num of nums, if it is less than target
    # if true, keep the value in a temporary variable
    # check next num if less than target, if so, add to previous value, if it equals target 
    # return index of previous num and current number
    # else repeat the process for next number

    x = 0
    result = []
    temp = nil
    while x != nums.length        
        current_num = nums[x]
        if current_num < target && temp == nil
            temp = current_num
        elsif current_num < target && temp != nil
            if (temp + current_num) == target
                y = nums.index(temp)
                result = [y, x]
                puts result
            end
        end
         x += 1         
    end
    result
end

two_sum([2,7,11,15], 9)