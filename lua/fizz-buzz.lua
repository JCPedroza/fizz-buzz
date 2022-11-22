--- Converts an integer into a fizz buzz string. That is, numbers divisible by
-- 3 to "fizz", by 5 to "buzz", by both to "fizzbuzz", and everything else to
-- the string representation of the number.
--
-- @tparam number num Number to be converted to fizz buzz string.
-- @treturn string Fizz buzz string representation of the number.
local function num_to_fb_str(num)
  local fb_str = ""

  if num % 3 == 0 then
    fb_str = fb_str .. "fizz"
  end

  if num % 5 == 0 then
    fb_str = fb_str .. "buzz"
  end

  if fb_str:len() == 0 then
    return tostring(num)
  else
    return fb_str
  end
end

--- Builds a sequence of fizz buzz string starting and ending at the specified
-- inclusive range.
--
-- @tparam number from Start of sequence (inclusive).
-- @tparam number to End of sequence (inclusive).
-- @treturn {string, ...} Array holding a sequence of fizz buzz strings.
local function build_fb_seq(from, to)
  local fb_seq = {}

  for num = from, to do
    fb_seq[num - from + 1] = num_to_fb_str(num)
  end

  return fb_seq
end

return build_fb_seq
