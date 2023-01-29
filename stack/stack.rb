class Stack
  def initialize
    @elements = []
  end

  def push(element)
    @elements << element
  end

  def pop
    @elements.pop
  end

  def peek
    @elements.last
  end

  def empty?
    @elements.empty?
  end
end

stack = Stack.new

stack.push(23)
stack.push(23)

p stack.instance_variable_get(:@elements)