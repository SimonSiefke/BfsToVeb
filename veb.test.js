import chai, { assert, expect } from 'chai'
import { getVeb } from './veb'


describe("the getVeb function", () => {
    for (let i = 1; i <= 10; i++) {
        test(i)
    }
})


function test(height) {
    it(`should work for a bfsTree of height ${height}`, () => {
        let expected
        switch (height) {
            case 1:
                expected = [0]
                break
            case 2:
                expected = [0, 1, 2]
                break
            case 3:
                expected = [0, 1, 2, 3, 4, 5, 6]
                break
            case 4:
                expected = [0, 1, 2, 3, 7, 8, 4, 9, 10, 5, 11, 12, 6, 13, 14]
                break
            case 5:
                expected = [0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 8, 17, 18, 9, 19, 20, 10, 21, 22, 11, 23, 24, 12, 25, 26, 13, 27, 28, 14, 29, 30]
                break
            case 6:
                expected = [0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 31, 32, 33, 34, 8, 17, 18, 35, 36, 37, 38, 9, 19, 20, 39, 40, 41, 42, 10, 21, 22, 43, 44, 45, 46, 11, 23, 24, 47, 48, 49, 50, 12, 25, 26, 51, 52, 53, 54, 13, 27, 28, 55, 56, 57, 58, 14, 29, 30, 59, 60, 61, 62]
                break
            case 7:
                expected = [0, 1, 2, 3, 7, 8, 4, 9, 10, 5, 11, 12, 6, 13, 14, 15, 31, 32, 63, 64, 65, 66, 16, 33, 34, 67, 68, 69, 70, 17, 35, 36, 71, 72, 73, 74, 18, 37, 38, 75, 76, 77, 78, 19, 39, 40, 79, 80, 81, 82, 20, 41, 42, 83, 84, 85, 86, 21, 43, 44, 87, 88, 89, 90, 22, 45, 46, 91, 92, 93, 94, 23, 47, 48, 95, 96, 97, 98, 24, 49, 50, 99, 100, 101, 102, 25, 51, 52, 103, 104, 105, 106, 26, 53, 54, 107, 108, 109, 110, 27, 55, 56, 111, 112, 113, 114, 28, 57, 58, 115, 116, 117, 118, 29, 59, 60, 119, 120, 121, 122, 30, 61, 62, 123, 124, 125, 126]
                break
            case 8:
                expected = [0, 1, 2, 3, 7, 8, 4, 9, 10, 5, 11, 12, 6, 13, 14, 15, 31, 32, 63, 127, 128, 64, 129, 130, 65, 131, 132, 66, 133, 134, 16, 33, 34, 67, 135, 136, 68, 137, 138, 69, 139, 140, 70, 141, 142, 17, 35, 36, 71, 143, 144, 72, 145, 146, 73, 147, 148, 74, 149, 150, 18, 37, 38, 75, 151, 152, 76, 153, 154, 77, 155, 156, 78, 157, 158, 19, 39, 40, 79, 159, 160, 80, 161, 162, 81, 163, 164, 82, 165, 166, 20, 41, 42, 83, 167, 168, 84, 169, 170, 85, 171, 172, 86, 173, 174, 21, 43, 44, 87, 175, 176, 88, 177, 178, 89, 179, 180, 90, 181, 182, 22, 45, 46, 91, 183, 184, 92, 185, 186, 93, 187, 188, 94, 189, 190, 23, 47, 48, 95, 191, 192, 96, 193, 194, 97, 195, 196, 98, 197, 198, 24, 49, 50, 99, 199, 200, 100, 201, 202, 101, 203, 204, 102, 205, 206, 25, 51, 52, 103, 207, 208, 104, 209, 210, 105, 211, 212, 106, 213, 214, 26, 53, 54, 107, 215, 216, 108, 217, 218, 109, 219, 220, 110, 221, 222, 27, 55, 56, 111, 223, 224, 112, 225, 226, 113, 227, 228, 114, 229, 230, 28, 57, 58, 115, 231, 232, 116, 233, 234, 117, 235, 236, 118, 237, 238, 29, 59, 60, 119, 239, 240, 120, 241, 242, 121, 243, 244, 122, 245, 246, 30, 61, 62, 123, 247, 248, 124, 249, 250, 125, 251, 252, 126, 253, 254]
                break
            case 9:
                expected = [0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 8, 17, 18, 9, 19, 20, 10, 21, 22, 11, 23, 24, 12, 25, 26, 13, 27, 28, 14, 29, 30, 31, 63, 64, 127, 255, 256, 128, 257, 258, 129, 259, 260, 130, 261, 262, 32, 65, 66, 131, 263, 264, 132, 265, 266, 133, 267, 268, 134, 269, 270, 33, 67, 68, 135, 271, 272, 136, 273, 274, 137, 275, 276, 138, 277, 278, 34, 69, 70, 139, 279, 280, 140, 281, 282, 141, 283, 284, 142, 285, 286, 35, 71, 72, 143, 287, 288, 144, 289, 290, 145, 291, 292, 146, 293, 294, 36, 73, 74, 147, 295, 296, 148, 297, 298, 149, 299, 300, 150, 301, 302, 37, 75, 76, 151, 303, 304, 152, 305, 306, 153, 307, 308, 154, 309, 310, 38, 77, 78, 155, 311, 312, 156, 313, 314, 157, 315, 316, 158, 317, 318, 39, 79, 80, 159, 319, 320, 160, 321, 322, 161, 323, 324, 162, 325, 326, 40, 81, 82, 163, 327, 328, 164, 329, 330, 165, 331, 332, 166, 333, 334, 41, 83, 84, 167, 335, 336, 168, 337, 338, 169, 339, 340, 170, 341, 342, 42, 85, 86, 171, 343, 344, 172, 345, 346, 173, 347, 348, 174, 349, 350, 43, 87, 88, 175, 351, 352, 176, 353, 354, 177, 355, 356, 178, 357, 358, 44, 89, 90, 179, 359, 360, 180, 361, 362, 181, 363, 364, 182, 365, 366, 45, 91, 92, 183, 367, 368, 184, 369, 370, 185, 371, 372, 186, 373, 374, 46, 93, 94, 187, 375, 376, 188, 377, 378, 189, 379, 380, 190, 381, 382, 47, 95, 96, 191, 383, 384, 192, 385, 386, 193, 387, 388, 194, 389, 390, 48, 97, 98, 195, 391, 392, 196, 393, 394, 197, 395, 396, 198, 397, 398, 49, 99, 100, 199, 399, 400, 200, 401, 402, 201, 403, 404, 202, 405, 406, 50, 101, 102, 203, 407, 408, 204, 409, 410, 205, 411, 412, 206, 413, 414, 51, 103, 104, 207, 415, 416, 208, 417, 418, 209, 419, 420, 210, 421, 422, 52, 105, 106, 211, 423, 424, 212, 425, 426, 213, 427, 428, 214, 429, 430, 53, 107, 108, 215, 431, 432, 216, 433, 434, 217, 435, 436, 218, 437, 438, 54, 109, 110, 219, 439, 440, 220, 441, 442, 221, 443, 444, 222, 445, 446, 55, 111, 112, 223, 447, 448, 224, 449, 450, 225, 451, 452, 226, 453, 454, 56, 113, 114, 227, 455, 456, 228, 457, 458, 229, 459, 460, 230, 461, 462, 57, 115, 116, 231, 463, 464, 232, 465, 466, 233, 467, 468, 234, 469, 470, 58, 117, 118, 235, 471, 472, 236, 473, 474, 237, 475, 476, 238, 477, 478, 59, 119, 120, 239, 479, 480, 240, 481, 482, 241, 483, 484, 242, 485, 486, 60, 121, 122, 243, 487, 488, 244, 489, 490, 245, 491, 492, 246, 493, 494, 61, 123, 124, 247, 495, 496, 248, 497, 498, 249, 499, 500, 250, 501, 502, 62, 125, 126, 251, 503, 504, 252, 505, 506, 253, 507, 508, 254, 509, 510]
                break
            case 10:
                expected = [0, 1, 2, 3, 4, 5, 6, 7, 15, 16, 8, 17, 18, 9, 19, 20, 10, 21, 22, 11, 23, 24, 12, 25, 26, 13, 27, 28, 14, 29, 30, 31, 63, 64, 127, 128, 129, 130, 255, 511, 512, 256, 513, 514, 257, 515, 516, 258, 517, 518, 259, 519, 520, 260, 521, 522, 261, 523, 524, 262, 525, 526, 32, 65, 66, 131, 132, 133, 134, 263, 527, 528, 264, 529, 530, 265, 531, 532, 266, 533, 534, 267, 535, 536, 268, 537, 538, 269, 539, 540, 270, 541, 542, 33, 67, 68, 135, 136, 137, 138, 271, 543, 544, 272, 545, 546, 273, 547, 548, 274, 549, 550, 275, 551, 552, 276, 553, 554, 277, 555, 556, 278, 557, 558, 34, 69, 70, 139, 140, 141, 142, 279, 559, 560, 280, 561, 562, 281, 563, 564, 282, 565, 566, 283, 567, 568, 284, 569, 570, 285, 571, 572, 286, 573, 574, 35, 71, 72, 143, 144, 145, 146, 287, 575, 576, 288, 577, 578, 289, 579, 580, 290, 581, 582, 291, 583, 584, 292, 585, 586, 293, 587, 588, 294, 589, 590, 36, 73, 74, 147, 148, 149, 150, 295, 591, 592, 296, 593, 594, 297, 595, 596, 298, 597, 598, 299, 599, 600, 300, 601, 602, 301, 603, 604, 302, 605, 606, 37, 75, 76, 151, 152, 153, 154, 303, 607, 608, 304, 609, 610, 305, 611, 612, 306, 613, 614, 307, 615, 616, 308, 617, 618, 309, 619, 620, 310, 621, 622, 38, 77, 78, 155, 156, 157, 158, 311, 623, 624, 312, 625, 626, 313, 627, 628, 314, 629, 630, 315, 631, 632, 316, 633, 634, 317, 635, 636, 318, 637, 638, 39, 79, 80, 159, 160, 161, 162, 319, 639, 640, 320, 641, 642, 321, 643, 644, 322, 645, 646, 323, 647, 648, 324, 649, 650, 325, 651, 652, 326, 653, 654, 40, 81, 82, 163, 164, 165, 166, 327, 655, 656, 328, 657, 658, 329, 659, 660, 330, 661, 662, 331, 663, 664, 332, 665, 666, 333, 667, 668, 334, 669, 670, 41, 83, 84, 167, 168, 169, 170, 335, 671, 672, 336, 673, 674, 337, 675, 676, 338, 677, 678, 339, 679, 680, 340, 681, 682, 341, 683, 684, 342, 685, 686, 42, 85, 86, 171, 172, 173, 174, 343, 687, 688, 344, 689, 690, 345, 691, 692, 346, 693, 694, 347, 695, 696, 348, 697, 698, 349, 699, 700, 350, 701, 702, 43, 87, 88, 175, 176, 177, 178, 351, 703, 704, 352, 705, 706, 353, 707, 708, 354, 709, 710, 355, 711, 712, 356, 713, 714, 357, 715, 716, 358, 717, 718, 44, 89, 90, 179, 180, 181, 182, 359, 719, 720, 360, 721, 722, 361, 723, 724, 362, 725, 726, 363, 727, 728, 364, 729, 730, 365, 731, 732, 366, 733, 734, 45, 91, 92, 183, 184, 185, 186, 367, 735, 736, 368, 737, 738, 369, 739, 740, 370, 741, 742, 371, 743, 744, 372, 745, 746, 373, 747, 748, 374, 749, 750, 46, 93, 94, 187, 188, 189, 190, 375, 751, 752, 376, 753, 754, 377, 755, 756, 378, 757, 758, 379, 759, 760, 380, 761, 762, 381, 763, 764, 382, 765, 766, 47, 95, 96, 191, 192, 193, 194, 383, 767, 768, 384, 769, 770, 385, 771, 772, 386, 773, 774, 387, 775, 776, 388, 777, 778, 389, 779, 780, 390, 781, 782, 48, 97, 98, 195, 196, 197, 198, 391, 783, 784, 392, 785, 786, 393, 787, 788, 394, 789, 790, 395, 791, 792, 396, 793, 794, 397, 795, 796, 398, 797, 798, 49, 99, 100, 199, 200, 201, 202, 399, 799, 800, 400, 801, 802, 401, 803, 804, 402, 805, 806, 403, 807, 808, 404, 809, 810, 405, 811, 812, 406, 813, 814, 50, 101, 102, 203, 204, 205, 206, 407, 815, 816, 408, 817, 818, 409, 819, 820, 410, 821, 822, 411, 823, 824, 412, 825, 826, 413, 827, 828, 414, 829, 830, 51, 103, 104, 207, 208, 209, 210, 415, 831, 832, 416, 833, 834, 417, 835, 836, 418, 837, 838, 419, 839, 840, 420, 841, 842, 421, 843, 844, 422, 845, 846, 52, 105, 106, 211, 212, 213, 214, 423, 847, 848, 424, 849, 850, 425, 851, 852, 426, 853, 854, 427, 855, 856, 428, 857, 858, 429, 859, 860, 430, 861, 862, 53, 107, 108, 215, 216, 217, 218, 431, 863, 864, 432, 865, 866, 433, 867, 868, 434, 869, 870, 435, 871, 872, 436, 873, 874, 437, 875, 876, 438, 877, 878, 54, 109, 110, 219, 220, 221, 222, 439, 879, 880, 440, 881, 882, 441, 883, 884, 442, 885, 886, 443, 887, 888, 444, 889, 890, 445, 891, 892, 446, 893, 894, 55, 111, 112, 223, 224, 225, 226, 447, 895, 896, 448, 897, 898, 449, 899, 900, 450, 901, 902, 451, 903, 904, 452, 905, 906, 453, 907, 908, 454, 909, 910, 56, 113, 114, 227, 228, 229, 230, 455, 911, 912, 456, 913, 914, 457, 915, 916, 458, 917, 918, 459, 919, 920, 460, 921, 922, 461, 923, 924, 462, 925, 926, 57, 115, 116, 231, 232, 233, 234, 463, 927, 928, 464, 929, 930, 465, 931, 932, 466, 933, 934, 467, 935, 936, 468, 937, 938, 469, 939, 940, 470, 941, 942, 58, 117, 118, 235, 236, 237, 238, 471, 943, 944, 472, 945, 946, 473, 947, 948, 474, 949, 950, 475, 951, 952, 476, 953, 954, 477, 955, 956, 478, 957, 958, 59, 119, 120, 239, 240, 241, 242, 479, 959, 960, 480, 961, 962, 481, 963, 964, 482, 965, 966, 483, 967, 968, 484, 969, 970, 485, 971, 972, 486, 973, 974, 60, 121, 122, 243, 244, 245, 246, 487, 975, 976, 488, 977, 978, 489, 979, 980, 490, 981, 982, 491, 983, 984, 492, 985, 986, 493, 987, 988, 494, 989, 990, 61, 123, 124, 247, 248, 249, 250, 495, 991, 992, 496, 993, 994, 497, 995, 996, 498, 997, 998, 499, 999, 1e3, 500, 1001, 1002, 501, 1003, 1004, 502, 1005, 1006, 62, 125, 126, 251, 252, 253, 254, 503, 1007, 1008, 504, 1009, 1010, 505, 1011, 1012, 506, 1013, 1014, 507, 1015, 1016, 508, 1017, 1018, 509, 1019, 1020, 510, 1021, 1022]
                break

        }
        const result = getAllVebs(createBfsArray(height))
        expect(result).to.deep.equal(expected)
    })
}


function getAllVebs(array) {
    const height = Math.log2(array.length + 1)
    let result = new Array(array.length)
    for (let bfsnumber of array) {
        result[getVeb(bfsnumber, height)] = bfsnumber
    }
    return result
}

function createBfsArray(height) {
    return [...Array(2 ** height - 1)].map((_, index) => index)
}