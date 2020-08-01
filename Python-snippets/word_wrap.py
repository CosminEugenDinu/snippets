#!/usr/bin/env python3


def word_wrap(txt, line_len):
    """
    Replaces spaces before line_len with '\n'
    """

    txt_chars = []

    count = 0
    for i in range(len(txt)):
        txt_chars.append(txt[i])
        # count += 1
        if count == line_len:
            count = 0
            # if txt[i] not in {'\t', ' ', '\n'}:
            if txt[i] != '\n':
                txt_chars[prev_space(i, txt)] = '\n'
        count += 1

    return "".join(txt_chars)


def prev_space(i, txt):
    """
    Returns the index of first found space backwards from i.
    """
    while txt[i] not in {' ', '\t', '\n'}:
        i -= 1
    return i