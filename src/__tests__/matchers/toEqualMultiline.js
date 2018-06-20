describe(`toEqualMultiline()`, () => {
  it(`passes when strings are identical`, () => {
    const expected = `
            one
              two
              two
                three
              two
                three
                  four
              two
            one`

    const value = `one
  two
  two
    three
  two
    three
      four
  two
one`

    expect(value).toEqualMultiline(expected)
  })

  it(`fails when strings are different`, () => {
    const expected = `
          one
              two
              two
                three
              two
                three
                  four
              two
            one`

    const value = `one
  one
  two
    three
  two
    three
      four
  two
one`

    expect(value).not.toEqualMultiline(expected)
  })
})
