class Node
  attr_accessor :value, :next_node

  def initialize(value, next_node = nil)
    @value = value
    @next_node = next_node
  end
end

class Stack
  def initialize
    @head = nil
  end

  def push(element)
    @head = Node.new(element, @head)
  end

  def pop
    return nil if @head.nil?

    value = @head.value
    @head = @head.next_node
    value
  end

  def peek
    @head&.value
  end

  def empty?
    @head.nil?
  end
end

def evaluate_expression(expression)
  stack = Stack.new
  expression_array = expression.split(" ")
  p expression_array
  expression_array.each do |token|
    p token
    if token =~ /\A[-+]?\d+\z/
      
      stack.push(token.to_i)
    elsif token == "+"
      op2 = stack.pop
      op1 = stack.pop
      p op1
      p op2      
      result = op1 + op2
      stack.push(result)
    elsif token == "-"
      op2 = stack.pop
      op1 = stack.pop
      p op1
      p op2
      result = op1 - op2
      stack.push(result)
    elsif token == "*"
      op2 = stack.pop
      op1 = stack.pop
      result = op1 * op2
      stack.push(result)
    elsif token == "/"
      op2 = stack.pop
      op1 = stack.pop
      result = op1.fdiv(op2)
      stack.push(result)
    elsif token == "("
      # do nothing
    elsif token == ")"
      # evaluate the expression inside the parentheses
      op2 = stack.pop
      operator = stack.pop
      op1 = stack.pop
      case operator
      when "+"
        result = op1 + op2
      when "-"
        result = op1 - op2
      when "*"
        result = op1 * op2
      when "/"
        result = op1.fdiv(op2)
      end
      stack.push(result)
    end
  end
  stack.pop
end

expression = "( 1 + ( 2 * 3 ) - ( 4 / 5 ) )"
puts evaluate_expression(expression)
