// Instructions can be found in imperative_vs_declarative.md

export function longPasswords(passwords) {
  let longPasswords = passwords.filter((el)=>el.length>=9)
  return longPasswords
}
