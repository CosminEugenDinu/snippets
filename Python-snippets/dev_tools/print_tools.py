import re

def dict_table_str(_dict, extended=False, col_len=7):
    
    if type(_dict) is not dict:
        raise TypeError('only type dict accepted')

    if col_len < 7: col_len = 7

    def keys_values(): 
        str_for_print = ''
        line_interval = f"{'-'*col_len}"
        columns = 1
        start_idx_count = 0 
        rows = []

        for k in _dict:
            key_str = f"{k}{' '*(col_len - len(k))}|" if len(k) <= col_len else f"{k[0:col_len]}|"
            if (val := _dict.get(k)) is None:
                key_str += f"{val}{' '*(col_len-len(f'{val}'))} "
            elif type(val) is str:
                if len(val) == 0:
                    key_str += repr(val); rows.append(key_str+'\n'); continue
                else: key_str += val; rows.append(key_str+'\n'); continue
            elif val is False or val is True or type(val) is int:
                key_str += repr(val); rows.append(key_str+'\n'); continue
            else:
                if len(val) > columns: columns = len(val)
                for elem in val:
                    elem_str = str(elem) 
                    key_str += f"{elem_str}{' '*(col_len-len(elem_str))} " if len(elem_str) <= col_len else f"{elem[0:col_len]} "
            rows.append(key_str + '\n')
        
        border_top = f"{'_'*col_len}_{(('_'*col_len)+'_')*columns}\n"
        complete_line = f"{line_interval}|"*columns+line_interval+'-'+'\n'
        complete_line_only_dashes = f"{line_interval}|{(line_interval+'-')*columns}"+'\n'

        idx_str = [f'{i}' for i in range(start_idx_count, columns+start_idx_count)]
        fix_len_idx_str = []

        for idx in idx_str:
            fix_len_idx_str.append(f"{idx}{' '*(col_len-len(idx))}" if len(idx) <= col_len else f"{idx[0:col_len]}")

        top_left = f"key\\idx{' '*(col_len-7)}|"
        header = top_left+'|'.join(fix_len_idx_str)+'\n'
        str_for_print += border_top
        str_for_print += header
        str_for_print += complete_line
        str_for_print += f"{complete_line_only_dashes}".join(rows)

        str_for_print = re.sub(r'\n', f'\n|', str_for_print)
        return str_for_print

# '.................................................................................'
    def values_keys():
        str_for_print = ''
        line_interval = f"{'-'*col_len}"
        empty_fix_len_str = ' '*col_len
        iter_idx = 0
        rows = []
        keys_str = [f'{k}' for k in _dict.keys()]
        
        columns = len(keys_str)
        # where _dict[some_key] has a dict as value, store those nested dict keys as a list
        nested_dict_keys_lists = {}
        
        end = False 
        while not end:
            end = True

            row = ''
            for key in _dict:
                val = _dict.get(key)
                val_type = type(val)
                val_str = ''

                if iter_idx == 0:
                    if (val is None) or (val_type is bool) or (val == ''):
                        val_str = repr(val)
                    elif val_type is int:
                        val_str = str(val)
                    elif val_type is str:
                        val_str = val

                if type(val) is dict:
                    if (nested_keys := nested_dict_keys_lists.get(key)) is None:
                        nested_dict_keys_lists[key] = list(_dict[key].keys())
                        nested_keys = nested_dict_keys_lists.get(key)
                    try:
                        val_str = repr(nested_keys[iter_idx])
                        end = False
                    except IndexError:
                        val_str = empty_fix_len_str;
                elif (type(val) is list) or (type(val) is tuple):
                    try:
                        val_str = repr(val[iter_idx])
                        end = False
                    except IndexError:
                        val_str = empty_fix_len_str

                row += f" {val_str[0:col_len]}" if len(val_str) > col_len else f" {val_str}{' '*(col_len-len(val_str))}"
            
            idx_str = str(iter_idx)
            fix_len_idx_str = f"{idx_str}{' '*(col_len-len(idx_str))}"
            rows.append(f"|{fix_len_idx_str}|{row}")
            iter_idx += 1

        fix_len_keys_str = []
        for key_str in keys_str:
            fix_len_keys_str.append(f"{key_str[0:col_len]}" if len(key_str) > col_len else f"{key_str}{' '*(col_len-len(key_str))}")
        
        border_top = f"{'_'*col_len}_{(('_'*col_len)+'_')*columns}\n"
        top_left = f"|idx\\key{' '*(col_len-7)}|"
        
        header = top_left+f"|".join(fix_len_keys_str)+'\n'
        # header = "".join(fix_len_keys_str)+'\n'
        complete_line = f"{line_interval}|"*columns+line_interval+'-'+'\n'
        complete_line_only_dashes = f"\n|{line_interval}|{(line_interval+'-')*columns}"+'\n'

        str_for_print += border_top
        str_for_print += header
        str_for_print += f"|{complete_line}"
        str_for_print += f"{complete_line_only_dashes}".join(rows)
        # str_for_print += '\n'.join(rows)

        return str_for_print
    
    return keys_values() if extended else values_keys()

