def countApplesAndOranges(s, t, a, b, apples, oranges)
    puts apples.count{|x| (x+a).between?(s,t)}    
    puts oranges.count{|x| (x+b).between?(s,t)}
end

countApplesAndOranges(7, 11, 5, 15, [-2, 2, 1], [5, -6])