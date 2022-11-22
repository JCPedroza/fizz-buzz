local fizz_buzz = require('fizz-buzz')

--- Returns true if both arrays are equal, one level deep, or false otherwise.
--
-- @tparam {string, ...} First array to compare.
-- @tparam {string, ...} Second array to compare.
-- @treturn boolean True if arrays are equal one level deep.
local function arr_equals(arr_a, arr_b)
  if #arr_a ~= #arr_b then
    return false
  end

  if #arr_a == 0 and #arr_b == 0 then
    return true
  end

  -- luacheck: ignore (how to implement without warning?)
  for index = 1, #arr_a do
    if arr_a[index] ~= arr_b[index] then
      return false
    end

    return true
  end
end

--- Array to string conversion.
--
-- @tparam {string, ...} Array to convert.
-- @treturn string String representation of the input array.
local function arr_to_str(arr)
  local arr_str = "{ "

  for index = 1, #arr do
    arr_str = arr_str .. tostring(arr[index]) .. " "
  end

  return arr_str .. "}\n"
end

--- Builds a table containing the arr_equals method used to compare two
-- arrays.
--
-- @tparam {string, ...} arr_a First array to compare.
-- @return Table containing arr_equals method.
-- @raise Will raise error if arrays are not equal.
local function expect(arr_a)
  return {
    --- Check for equality between both arrays.
    --
    -- @tparam {string, ...} arr_b Second array to compare.
    to_equal = function(arr_b)
      if not arr_equals(arr_a, arr_b) then
        local msg = "\nInequality\n" .. arr_to_str(arr_a) .. arr_to_str(arr_b)
        error(msg)
      end
    end
  }
end

-- Inconsistent ranges evaluate to empty arrays
expect(fizz_buzz(10, 0))
  .to_equal({})

-- One-number ranges evaluate to singleton arrays
expect(fizz_buzz(0, 0))
  .to_equal({"fizzbuzz"})

-- Positive range
expect(fizz_buzz(10, 20))
  .to_equal({
    "buzz",
    "11",
    "fizz",
    "13",
    "14",
    "fizzbuzz",
    "16",
    "17",
    "fizz",
    "19",
    "buzz"
  })

-- Negative range
expect(fizz_buzz(-20, -10))
.to_equal({
  "buzz",
  "-19",
  "fizz",
  "-17",
  "-16",
  "fizzbuzz",
  "-14",
  "-13",
  "fizz",
  "-11",
  "buzz"
})
